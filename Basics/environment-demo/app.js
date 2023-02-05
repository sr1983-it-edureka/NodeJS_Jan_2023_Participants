



const express = require("express");
const config = require("config");


const app = express();

// const appEnv = app.get("env");
// console.log(appEnv);

const environment = process.env.NODE_ENV;
console.log(environment);

const PORT = config.get("PORT"); 
const loggingEnabled = config.get("logging");
const mongoDBURL = config.get("MONGODB_URL");

console.log(`Port is ${PORT}`);
console.log(`Logging Enabled - ?  ${loggingEnabled}`);
console.log(`MongoDB URL  ?  ${mongoDBURL}`);


try{
  const emailServer = config.get("email.server");
  console.log(`Email Server ${emailServer}`);
  
  const emailServerPort = config.get("email.port");
  console.log(`Email Server Port ${emailServerPort}`);  
}catch (error){
  console.log("Email Setting - Not configured...")
}


app.listen(PORT, () => {
  console.log(`Server started and running at port ${PORT}`);
})