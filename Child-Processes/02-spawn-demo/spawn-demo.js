
const cp = require("child_process");

const command = "node";
const arguments = ["timer-loop.js"];

const timerLoopNodeJsProcess = cp.spawn(command, arguments);

timerLoopNodeJsProcess.stdout.on('data', (data) => {

  console.log("********************************");
  console.log(data.toString());
})

timerLoopNodeJsProcess.stderr.on('data', (errorData) => {

  console.log(errorData);
})
