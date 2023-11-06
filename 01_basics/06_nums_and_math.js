const score = 400
console.log(score);

const balance = new Number(100) //new object me define hua h jo nuber type ka h
console.log(balance);

console.log(balance.toString()); // changes datatype to string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Upto 2 decimal places

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000,000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++ Maths +++++++++
console.log(Math); // Object
console.log(Math.abs(-4)); // -4 = 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2)); // 4
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,3,2,1)); // 1
console.log(Math.max(4,5,6,7)); // 7
console.log(Math.random()); // givesvalue between 0 and 1
console.log((Math.random()*10) + 1); // gives value between 1 and 10

const min = 10
const max = 20

console.log(Math.random() * (max-min+1) + min); // get value between 10 and 20


