
const express = require("express");

const {generateCookie, listCookies} = require("./controller.js")


const demoCookieRouter = express.Router();

demoCookieRouter.get("/demo/cookies/generate", generateCookie)
demoCookieRouter.get("/demo/cookies/list", listCookies)

module.exports = {demoCookieRouter}

