
const empInfo1 = {id: 1, name : "Jack"};

const empInfo2 = {projects: ["p1", "p2"]};

const empInfo3 = {designation: "Software Engineer", division : "Engineering"};

const empInfo = {...empInfo1, ...empInfo2, ...empInfo3};

console.log(empInfo);
