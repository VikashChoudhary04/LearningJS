let score = "34"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //To change the datatype
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false; " " => true;

let someNumber = 34

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);