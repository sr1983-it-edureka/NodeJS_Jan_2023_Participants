
const path = require("path");

const pathObj = path.parse(module.filename);

console.log(pathObj);

console.log(`File extension is ${pathObj.ext}`)
console.log(`Base name is ${pathObj.base}`)
