
const {User} = require("./model");
const jwt = require("jsonwebtoken");
const config = require("config");
const {errorResponse} = require("./error-handler");

const SECRET_KEY = config.get("SECRET_KEY");
const TWO_DAYS_IN_SECONDS = 2 * 24 * 60 * 60;

const createJWTToken = (usernameValue) => {

  const token = jwt.sign({username: usernameValue}, SECRET_KEY, {
    
    expiresIn : TWO_DAYS_IN_SECONDS
  })
  console.log(`Token is ${token}`);
  return token;
}

const signUp = async (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  console.log(`Username is ${username} and password is ${password}`);

  // Password Hashing

  try{
    const newUser = await User.create({username, password});
    console.log(`New User is ${newUser}`);
  
    const token = createJWTToken(username);

    res.cookie("jwt", token, {
      maxAge: TWO_DAYS_IN_SECONDS * 1000
    })

    res.status(201).json({
      user: newUser
    });  

  }catch (error){

    console.log(error);
    res.status(400).json(errorResponse(error))

  }

}

const signIn = async (req, res) => {

  // Check - username / password
  // Valid
    //   

  const username = req.body.username;
  const password = req.body.password;

  try{
    const existingUser = await User.checkUser(username, password);

    const token = createJWTToken(username);
    res.cookie("jwt", token, {
      maxAge : TWO_DAYS_IN_SECONDS * 1000
    });

    res.json({
      user: existingUser
    })

  }catch(error){

    console.log(error);
    res.status(400).json(errorResponse(error))

  }

}

const signOut = (req, res) => {

  console.log("Sign out called - Server")

  res.cookie('jwt', '', {
    maxAge: 1
  })

  res.status(200).json("success");

}

module.exports = {signUp, signIn, signOut}