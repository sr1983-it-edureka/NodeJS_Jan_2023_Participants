
const express = require("express");

const {Book} = require("./book-model");
const {connect} =require("my-database-module");

const app = express();

const MONGODB_URI = `mongodb+srv://root:mypassword@cluster1.6ygaca6.mongodb.net/books-db?retryWrites=true&w=majority`;

connect(MONGODB_URI);

app.use(express.json());

const PORT = 5555;

app.get("/books", (req, res) => {

  Book.find()
    .then( (books) => {

      res.json(books);
    }).catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })

})

app.post("/books", (req, res) => {

  const reqDetails = {
    title: req.body.title,
    author: req.body.author,
    noOfPages : req.body.noOfPages
  }

  const newBook = new Book(reqDetails);
  newBook.save()
    .then( () => {
      res.json({
        message: "Book Created successfully"
      })
    })
    .catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })

})

app.get("/books/:id", (req, res) => {

  Book.findById(req.params.id)
    .then( (book) => {
      res.json(book);
    } )
    .catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })
})

app.listen(PORT, () => {
  console.log(`Book Module running at port ${PORT}`);
})