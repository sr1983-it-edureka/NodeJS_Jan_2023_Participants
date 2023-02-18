
var empInfo1 = {id: 1, name : "Jack"};

var empInfo2 = {projects: ["p1", "p2"]};

var empInfo3 = {designation: "Software Engineer", division : "Engineering"};

var empInfo = Object.assign(empInfo1, empInfo2, empInfo3);
console.log(empInfo);
