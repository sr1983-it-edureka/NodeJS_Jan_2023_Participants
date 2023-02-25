
const express = require("express");

const app = express();

app.set("view engine", "ejs");

const data = {
  username : 'raj',
  appTitle : "NodeJS - EJS Application Demo",
  favMovies : [
    "Harry Potter", "Rebecca", "The Usual Suspects"
  ]
}

app.get("/", (req, res) => {

  console.log("New client request fired....");
  res.render("hello", data);

})

const port = 8081;

app.listen(port, () => {
  console.log(`Server started and running in port ${port}`);
})

