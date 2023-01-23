

const myTableAsJSON = '{"color":"Blue","myLaptop":{"color":"Grey","manufacturer":"Lenova","model":"Some model"},"myMobilePhone":{"manufacturer":"Samsung","cost":12345,"os":"Android"},"myDevices":["External Hard Disk","Pen Drive - 64 GB"],"myMobilePhone2":{"manufacturer":"Apple"}}';



const myTable = JSON.parse(myTableAsJSON);

console.log(`Manufacturer is ${myTable.myMobilePhone.manufacturer}`);
console.log(`Second element in MyDevices array ${myTable.myDevices[1]}`)
