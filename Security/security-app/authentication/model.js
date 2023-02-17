// User object / schema

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: [true, "Please supply username"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "Please supply password"],
    minlength: [6, "Password must be atleast 6 characters"]
  } 
})

userSchema.statics.checkUser = async (username, password) => {

  const user = await User.findOne({username: username})

  if (user){

    console.log(`user object in check user ` + user.username + ", " + user.password);

      // password -> Plain text password
      // user.password -> Hashed password

      const passwordsAreEqual = await bcrypt.compare(password, user.password);

      if (passwordsAreEqual){
        return user;
      }else{
        throw Error(`Incorrect password ${password} supplied for the username ${username}`);
      }
  }else{

    throw Error(`User by the username ${username} cannot be found`);
  }

  // Check for the username
  // Password Comparson

}

userSchema.pre("save", async function(next) {

  // Have acces to the user-object (username, password)

  console.log("Value for this " + JSON.stringify(this));
  console.log("Application specific logic - such as custom valiation BEFORE SAVE");

  const plainTextPassword = this.password;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

  this.password = hashedPassword;

  next();
});

/*
userSchema.post("save", function (next) {

  console.log("Application specific logic - AFTER SAVE");

  next();
});*/


const User = mongoose.model("user", userSchema);

module.exports = {User};