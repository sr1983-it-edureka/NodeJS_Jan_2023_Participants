
const cp = require("child_process");

// const command = "dir C:\\";
// const command = "abc";
const command = "notepad.exe";

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