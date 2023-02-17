
const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const authenticationModule = require("./authentication/routes");
const taskModule = require("./task/router");
const cookieModule = require("./demo/cookies/router");
const cookieParser = require("cookie-parser");
const { productRouter } = require("./product/router");


const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(cookieParser());

app.use(authenticationModule.authenticationRouter);
app.use(taskModule.taskRouter); 
app.use(productRouter); 

app.use(cookieModule.demoCookieRouter);

const PORT = process.env.PORT || 8081 

app.listen(PORT, () => {
  console.log(`Server started and running at port ${PORT}`);
})

const MONGODB_URL =  config.get("MONGODB_URL");

mongoose.connect(MONGODB_URL)
  .then( () => {
    console.log("MongoDB Connected Successfully....");
  })
  .catch( (error) => {
    console.log("Connection failed " + error);
  })
