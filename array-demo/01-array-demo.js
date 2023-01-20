
// const favColors = "Red, Blue, Green";

const favColors = ["Red", "Blue", "Green"];

console.log(favColors);

console.log(`The number of colors are ${favColors.length}`);


const size = favColors.length;

console.log(`Size of the colors array is ${size}`);

const c1 = favColors.length * 10;

favColors.push("Orange");
favColors.push("White");

const c2 = favColors.length + 10;

console.log(`Size of the colors array is ${favColors.length}`);

console.log(favColors);

const secondElement = favColors[2];
console.log(`Second element in the array is ${secondElement}`);