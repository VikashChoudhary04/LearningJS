// Array

const myArr = [0,1,3,4,5] // resizable, all data types in 1 variable
const myHeroes = ["shaktiman","superman"]
const myArr2 = new Array(1,2,3,4) // ways to initialize array


console.log(myArr[0]); // accessing array


// Array Methods

myArr.push(10)
console.log(myArr);
myArr.pop() // needs no value because pops out the last value

myArr.unshift(9) // inserts at the start
myArr.shift() // works like pop but deletes from start

console.log(myArr.includes(9)) //true or false
console.log(myArr.indexOf(5));
const newArr = myArr.join(); // changes datatype from array to string

//slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3) // it does not changes the array and gives the value in the range excluding the last range
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // it gives the output according to the including given ranges but it changes the array by removing the given range from the original array
console.log(myn2);
 