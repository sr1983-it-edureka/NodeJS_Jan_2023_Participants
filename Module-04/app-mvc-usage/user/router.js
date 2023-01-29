
const express = require("express");
const controller = require("./controller.js");

const userRouter =  express.Router();

userRouter.get("/users", controller.getAllUsers);

module.exports = {userRouter};