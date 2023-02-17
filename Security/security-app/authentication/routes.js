
const express = require("express")

const authenticationRouter = express.Router();

const authenticationController = require("./controller");


authenticationRouter.post("/auth/sign-up", authenticationController.signUp);
authenticationRouter.post("/auth/sign-in", authenticationController.signIn);
authenticationRouter.post("/auth/sign-out", authenticationController.signOut);


module.exports = {authenticationRouter};