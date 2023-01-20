
const greeting = "Good Morning     ";

// Repeat method
const repeatedGreeting =  greeting.repeat(5);

console.log(greeting);
console.log(repeatedGreeting);

const trimmedGreeting = greeting.trim();
console.log(greeting + "Length " + greeting.length);
console.log(trimmedGreeting + "Length " + trimmedGreeting.length);

const tom = "Tom";
const tomInUpperCase = tom.toUpperCase();

console.log(tom);
console.log(tomInUpperCase);

const director = "Christopher Nolan";
const position = 5;
const someCharacter = director.charAt(position);

console.log(`At position ${position}, the character ${someCharacter} is present in the string ${director}`);

const courseName = "HTML CSS & Java Script";
const stringToFind = "Python";

const substringPresentOrNot = courseName.includes(stringToFind);
if (substringPresentOrNot){
  console.log(`Substring ${stringToFind} is present in the main string ${courseName}`);
}else{
  console.log(`Substring ${stringToFind} NOT FOUND in the main string ${courseName}`);  
}

const splittedStrings = courseName.split(" ");
console.log(splittedStrings);