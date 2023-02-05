
const express = require("express")

const authenticationRouter = express.Router();

const authenticationController = require("./controller");


authenticationRouter.post("/sign-up", authenticationController.signUp);
authenticationRouter.post("/sign-in", authenticationController.signIn);
authenticationRouter.post("/sign-out", authenticationController.signOut);


module.exports = {authenticationRouter};