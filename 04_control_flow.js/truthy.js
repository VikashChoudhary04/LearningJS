const userEmail = "@gmail.com"

if(userEmail){
    console.log("Got User email");
}
else{
    console.log("Dont have user email");
}

// falsy value 
false, 0, -0,BigInt 0n, "", null, undefined, NaN

// truthy value
"0" in string, 'false'in string, " ", [], {}, function(){}

//Checking if Array is empty
if(userEmail.length === 0){
    console.log("Array is Empty");
}

//Checking empty objects
const emptyObj = {} // empty object
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1=5??10 // gives output 5 used in firebase or database
val1 = null?? 10 // gives output 10
val1 = undefined??15 // gives output 15
val1 = nul??10??20 // gives output 10


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice>= 80 ? console.log("less than 80") : console.log("more thn 80") 