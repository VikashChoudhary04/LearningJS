const name = "Vikash"
const repoCount = 50

// console.log(name + repoCount + "Value");
// outdated way of printing values

console.log(`Hello myname is ${name} and my repo count is ${repoCount}`);
//String interplation
// we create placeholders here and directly inject the variable here through the use of $ sign
// better and readable

const gameName = new String('Vikash')
console.log(gameName[0]); //String is an Object in JS with key value pairs range starting from 0
console.log(gameName.__proto__); //showing object with key value pairs

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('1'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4) // we can give negative values in this (strt from back of String)

const newStringOne = " Vikash    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes white spaces

const url = "https://vikash.com/vikash%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));

// read about Strings from MDN