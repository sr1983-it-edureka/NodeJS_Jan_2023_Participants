
const express = require("express");

const {Customer} = require("./customer-model");
const {connect} =require("my-database-module");

const app = express();

const MONGODB_URI = `mongodb+srv://root:mypassword@cluster1.6ygaca6.mongodb.net/customers-db?retryWrites=true&w=majority`;

connect(MONGODB_URI);

app.use(express.json());

const PORT = 6666;

app.get("/customers", (req, res) => {

  Customer.find()
    .then( (customers) => {

      res.json(customers);
    }).catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })

})

app.post("/customers", (req, res) => {

  const reqDetails = {
    name: req.body.name,
    age: req.body.age
  }

  const newCustomer = new Customer(reqDetails);
  newCustomer.save()
    .then( () => {
      res.json({
        message: "Customer Created successfully"
      })
    })
    .catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })

})

app.get("/customers/:id", (req, res) => {

  Customer.findById(req.params.id)
    .then( (customer) => {
      res.json(customer);
    } )
    .catch( (error) => {
      console.log(error);
      res.status(404).json(error);
    })
})

app.listen(PORT, () => {
  console.log(`Customer Module running at port ${PORT}`);
})