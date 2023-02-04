
const os = require("os");


console.log(os.EOL);


const userInfo = os.userInfo();

console.log(userInfo);

console.log(userInfo.homedir);
console.log(userInfo.username);