
const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({

  name: {
    type: String,
    require: true
  },

  age: {
    type: Number,
    require: true
  }

})

const Customer = mongoose.model("customer", customerSchema);
module.exports = {Customer}