
function myFunction(){

  console.log("My Function....")
}

function anotherFunction(){

  console.log("Another Function....")
}

const PI = 3.14;

const EDUREKA = "Edureka Training Institute";

/*
module.exports.myFunction = myFunction;
module.exports.anotherFunction = anotherFunction;
module.exports.MATHS_PI = PI;
module.exports.EDUREKA = EDUREKA;
*/

module.exports = { myFunction, anotherFunction, PI, EDUREKA};
