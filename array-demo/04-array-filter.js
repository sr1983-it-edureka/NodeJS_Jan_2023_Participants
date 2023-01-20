// Array having 100 elements
// Requirements
// 1 -> Find out all the even numbers and store in a separate array
// 2 -> Find out all the odd numbers

let numbers = new Array();

for (let index = 1; index <=30; index ++){
  numbers.push(index);
}


// Even numbers
// 68 /2 [Q - 34, R - 0]
const evenNumbers = new Array();

for (let index = 0; index < numbers.length; index ++){

  const aNumber = numbers[index];
  const remainderValue = aNumber % 2;

  if (remainderValue == 0){
    console.log("Even Number " + aNumber);
    evenNumbers.push(aNumber);
  }
}

console.log("Original Array ->" + numbers);
console.log("Even Numbers Array ->" + evenNumbers);


// Finding out even numbers using filter()

function evenNumbersFilter(element, index, entireArray){

  const remainderValue = element % 2;

  if (remainderValue == 0){
    return element;
  } 
}

const evenNumbersArray2 = numbers.filter(evenNumbersFilter);

console.log("Even Numbers Array 2");
console.log(evenNumbersArray2);