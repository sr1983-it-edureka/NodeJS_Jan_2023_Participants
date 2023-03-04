
const express = require("express");

const app = express();

app.set("view engine", "ejs");

const data = {
  port : process.env.PORT,
  username : 'raj',
  appTitle : "NodeJS - EJS Application Demo",
  favMovies : [
    "Harry Potter", "Rebecca", "The Usual Suspects"
  ]
}

app.get("/", (req, res) => {

  res.render("hello", data);

})

// const port = process.env.PORT;
const port = 9999;

app.listen(port, () => {
  console.log(`Server started and running in port ${port}`);
})

