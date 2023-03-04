
require("dotenv").config();

const dbUrl = process.env.MONGODB_DB_URL;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

console.log(dbUrl);
console.log(username);
console.log(password);
