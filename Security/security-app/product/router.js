
const express = require("express");
const { authenticationCheck } = require("../authentication/middleware.js");

const {getAllProducts} = require("./controller.js")


const productRouter = express.Router();

productRouter.get("/products", authenticationCheck, getAllProducts)

module.exports = {productRouter}

