
const installedSoftwares = new Array();

installedSoftwares.push("7 Zip");
installedSoftwares.push("Agent Ransack");
installedSoftwares.push("Alexa");
installedSoftwares.push("Beyond Compare");


// Traditional way
/*for (let index = 0; index < installedSoftwares.length; index ++) {

  let software = installedSoftwares[index];
  console.log(`Software present at index ${index} is ${software}`);

}*/

const printElementFunction = function printElement(
  element, index, entireArray){

  console.log(`Printing Element in the Array : ${element} ${index}`);
}

installedSoftwares.forEach(printElementFunction);