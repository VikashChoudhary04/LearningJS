// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// Referenced (Non primitive)

// Array, Objects, Functions

const heros = ["batman", "superman"];
let myObj = {
    name : "Vikash",
    age : 25,
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof null) // it will give output a s Object