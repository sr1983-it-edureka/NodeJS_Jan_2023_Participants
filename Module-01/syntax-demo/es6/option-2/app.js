
import {readFile, readFileSync, writeFile, writeFileSync} from "fs";

readFile("./app.js", "utf-8", function(error, data){

  if (error){
    console.log("File Read Error " + error);
  }else{
    console.log(data);
  }
})
