
const fs = require("fs");

console.log("Loaded file system module.." + fs);

fs.readFile("./app1.js", "utf-8", function(error, data){

  if (error){
    console.log("File Read Error " + error);
  }else{
    console.log(data);
  }
})