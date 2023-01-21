

const util = require("util");


let name = "Edureka";
let noOfParticipants  = 15;

let course = {
  name: 'Mastering NodeJS',
  duration: 10,
  batchSize: 25
}

let example1 = util.format("Training Institute name is %s", name);
let example1_1 = `Training Institute Name is ${name}`;

console.log(example1);
console.log(example1_1);

let example2 = util.format("No of particiapnts is %d", noOfParticipants);
console.log(example2);

let example3 = util.format("Course Details %j", course);
console.log(example3);
