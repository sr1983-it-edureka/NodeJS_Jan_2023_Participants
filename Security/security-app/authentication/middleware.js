
const jwt = require("jsonwebtoken");

const config = require("config");

const SECRET_KEY = config.get("SECRET_KEY");

const authenticationCheck = (req, res, next) => {

  const jwtToken = req.cookies.jwt;

  if (jwtToken){

    jwt.verify(jwtToken, SECRET_KEY, (error, decodedToken) => {

      if (error){

        console.log(error);
        res.redirect("/sign-in.html");
      }else{

        console.log("Valid JWT Token " + decodedToken);
        next();
      }
    })    

  }else{

    res.redirect("/sign-in.html");
  }

}

module.exports = {authenticationCheck}