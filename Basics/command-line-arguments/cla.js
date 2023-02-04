
// console
// require("process")

const arguments = process.argv;

console.log(arguments);

console.log(`Number of arguments in the terminal ${arguments.length}`);

for (let index = 0; index < arguments.length; index ++){

  const argValue = arguments[index];
  console.log(`Argument at position ${index} is ${argValue}`);
}
