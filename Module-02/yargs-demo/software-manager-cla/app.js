
const yargs = require("yargs");

yargs.command(
  "software-install",
  "Command to install the software", {

    name : {
      type: "string",
      demandOption: true,
      describe : "Name of the software"
    },

    softwareVersion : {
      type: "string",
      demandOption: true,
      describe: "Version of the software"
    },

    repository : {
      type: "string",
      demandOption: false,
      describe: "The repository to download the software from"
    }
  },

  function (arguments){

    // Windows API
    // SoftwareManager.installSoftware("Chrome", "10.0");
    console.log("The given software will be installed")
    console.log(arguments.name);
    console.log(arguments.softwareVersion);
  }
).example("software-install --name=Chrome --version=109.0 --repository=http://mysoftwares.com")



yargs.command(

  "software-uninstall",
  
  "Command to uninstall the software", {

    name : {
      type: "string",
      demandOption: true,
      describe : "Name of the software"
    },

    version : {
      type: "string",
      demandOption: true,
      describe: "Version of the software"
    }
  },

  function (argv){
    console.log("The given software will be uninstalled")
  }
)

console.log(yargs.argv);