console.log("2" > 1); // output will be true
console.log("02" > 1); // it get changes to integer from string

console.log(null > 0); // equal and comparison change work differently
console.log(null == 0); // comparisons convert null to a number treating it as 0
console.log(null >=0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === Strict check

console.log("2" === 2); // gives output false because data type is different
