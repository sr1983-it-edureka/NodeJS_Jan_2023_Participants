
const cp = require("child_process");


for (let index = 1; index <=4; index ++){

  const a = index + 10;
  const b = index + 20;

    const command = `node child-node-add.js ${a} ${b}`;

    const nodeJsAddProcess = 
    cp.exec(command, (error, commandOutput, commandErrorOutput) => {

    if (error){
      console.log("COMMAND FAILURE" + error);
      return;
    }

    if (commandErrorOutput){
      console.log("Command Error Outcome ->" + commandErrorOutput);
    }else{

      console.log("START -> Command Executed Normally");
      console.log(commandOutput);
      console.log("END -> Command Executed Normally");
    }
  });

  nodeJsAddProcess.on('exit', (code) => {

    console.log("Child process has exited with the code " + code);
  })

}
