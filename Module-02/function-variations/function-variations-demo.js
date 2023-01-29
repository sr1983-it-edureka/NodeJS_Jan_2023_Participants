

const fs = require("fs");

const filename = "./mytable.json";

// 3 variations

// Inline function
/*fs.readFile(filename, "utf-8", function(error, contents){

  if (error){
    console.log("File reading error" + error);
  }else{
    console.log(contents);
  }
})*/


// Function
function readFileHandler(error, contents){

  if (error){
    console.log("File reading error" + error);
  }else{
    console.log(contents);
  }
}
//fs.readFile(filename, "utf-8", readFileHandler);
// Reading from from myTable2.json


// Variation 3 - Arrow Function
fs.readFile(filename, "utf-8", (error, contents) => {

  if (error){
    console.log("File reading error" + error);
  }else{
    console.log(contents);
  }
})

// () => {console.log("hello")};
// () => console.log("hello");

