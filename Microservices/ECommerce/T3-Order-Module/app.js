
const express = require("express");

const {Order} = require("./order-model");
const {connect} =require("my-database-module");
const { default: mongoose } = require("mongoose");
const axios = require("axios");
require("dotenv").config();


const app = express();

const MONGODB_URI = `mongodb+srv://root:mypassword@cluster1.6ygaca6.mongodb.net/orders-db?retryWrites=true&w=majority`;

connect(MONGODB_URI);

app.use(express.json());

const PORT = 7777;

app.get("/orders", (req, res) => {

  Order.find()
    .then( (orders) => {

      res.json(orders);
    }).catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })

})

app.post("/orders", (req, res) => {

  const reqDetails = {
    customerId: new mongoose.Types.ObjectId(req.body.customerId),
    bookId: new mongoose.Types.ObjectId(req.body.bookId),
    quantity: req.body.quantity,
    orderDate: req.body.orderDate
  }

  const newOrder = new Order(reqDetails);
  newOrder.save()
    .then( () => {
      res.json({
        message: "Order Placed successfully"
      })
    })
    .catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })

})

app.get("/orders/:id", (req, res) => {

  const bookApiBaseUrl = process.env.BOOK_API_BASE_URL;
  const customerApiBaseUrl = process.env.CUSTOMER_API_BASE_URL;


  // Get the details about the Order
  // [Book-Title, Customer-Name]

  Order.findById(req.params.id)
    .then( (order) => {

      const bookGetByIdURL = `${bookApiBaseUrl}${order.bookId}`;
      const customerGetByIdUrl = `${customerApiBaseUrl}${order.customerId}`;

      console.log("Books URL" + bookGetByIdURL);
      console.log("Customer URL" + customerGetByIdUrl);

      const orderResponseObj = {
        quantity : order.quantity,
        orderDate: order.orderDate
      };


      axios.get(bookGetByIdURL)
        .then( (response) => {
          orderResponseObj.bookTitle = response.data.title;          

          axios.get(customerGetByIdUrl)
            .then( (response) => {
              orderResponseObj.customerName = response.data.name;

              res.json(orderResponseObj);

            })
            .catch( (error) => {
              console.log(error);
              res.status(404).json(error);
            })
        })
        .catch((error) => {          
          console.log(error);
          res.status(404).json(error);
        })

    } )
    .catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })
})

app.listen(PORT, () => {
  console.log(`Customer Module running at port ${PORT}`);
})