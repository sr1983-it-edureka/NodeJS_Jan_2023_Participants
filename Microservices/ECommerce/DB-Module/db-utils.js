
const mongoose = require("mongoose");

const connect = (mongoDBURI) => {

  mongoose.connect(mongoDBURI)
    .then( () => {
      console.log("MongoDB Connection Successful !!!")
    })
    .catch( () => {
      console.log("MongoDB Connection Failure !!!");
    })
}

module.exports = {connect}