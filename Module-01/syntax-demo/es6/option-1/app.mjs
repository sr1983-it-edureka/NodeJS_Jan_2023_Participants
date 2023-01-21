
import {readFile} from "fs";

readFile("./app.mjs", "utf-8", function(error, data){

  if (error){
    console.log("File Read Error " + error);
  }else{
    console.log(data);
  }
})
