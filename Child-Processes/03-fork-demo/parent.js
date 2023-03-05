
const cp = require("child_process");

const command = "child.js";

const childProcessInstance = cp.fork(command);

childProcessInstance.send({
  id: 1,
  source : "Parent Process",
  message : "Parent process sending a Hi message to Child"
})

// Parent want to receive the message from the child
childProcessInstance.on('message', (message) => {

  console.log("Received message from child " + JSON.stringify(message));
  
})