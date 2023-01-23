
const myMobilePhone2 = {
  manufacturer : "Apple"
}

const myTable = {

  color: "Blue",

  myLaptop: {
    color: "Grey",
    manufacturer: "Lenova",
    model : "Some model"
  },

  myMobilePhone : {
    manufacturer : "Samsung",
    cost: 12345,
    os: "Android",
  },

  myDevices: ["External Hard Disk", "Pen Drive - 64 GB"],

  myMobilePhone2 : myMobilePhone2
}


const myTableAsStr = JSON.stringify(myTable);
console.log(myTableAsStr);
