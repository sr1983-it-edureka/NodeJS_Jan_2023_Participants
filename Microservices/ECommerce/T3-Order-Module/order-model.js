
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

  customerId : {
    type: mongoose.SchemaTypes.ObjectId,
    require: true
  },

  bookId : {
    type: mongoose.SchemaTypes.ObjectId,
    require: true
  },
  
  quantity : {
    type: Number,
    require: true
  },

  orderDate : {
    type: Date,
    require: true
  }
})

const Order = mongoose.model("order", orderSchema);
module.exports = {Order}