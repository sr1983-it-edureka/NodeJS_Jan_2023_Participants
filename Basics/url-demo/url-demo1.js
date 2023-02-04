

const url = require("url");

const edurekaLmsUrl = "https://learning.edureka.co/classroom/presentation/1905/16600/1531006?tab=CourseContent&batchId=24418";


const urlResponse = url.parse(edurekaLmsUrl, true);

console.log(urlResponse.host);
console.log(urlResponse.search);
console.log(urlResponse.pathname);

const queryParams = urlResponse.query;
console.log(queryParams);

console.log(queryParams.tab);
console.log(queryParams.batchId);

sampleUrl = "http://localhost:80/employees?firstName=Shankar&lastName=Mahadev&id=123&salary=12345";


const employeeResponse = url.parse(sampleUrl, true);

const employee = employeeResponse.query;

// const console = console.log;

console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.id);
console.log(employee.salary);
