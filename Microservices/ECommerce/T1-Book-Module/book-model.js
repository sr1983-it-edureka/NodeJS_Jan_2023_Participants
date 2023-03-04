
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({

  title: {
    type: String,
    require: true
  },

  author: {
    type: String,
    require: true
  },

  noOfPages: {
    type: Number,
    require: true
  },

})

const Book = mongoose.model("book", bookSchema);
module.exports = {Book}