// singleton
// Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Vikash",
    [mySym]: "mykey1",
    age: 18,
    email: "vikash@google.com"
    location: "Jamshedpur",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email); // 1st way of accessing objects
console.log(JsUser["email"]); // 2nd way of accessing objects but it is a string thats why []
// Suppose we write full name with "full name : Vikash Choudhary" then this cant be accessed with . object
// console.log(JsUser.mySym); // but its type will be string
console.log(JsUser[mySym]); // correct way of accessing symbol

JsUser.email = "vikash@netflix.com"
Object.freeze(JsUser) // freezes thevalue so that it cant be changed
console.log(JsUser); // printing the object


JsUser.greeting = function(){
   console.log("Hello JS user"); 
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // same object ko refer krne ke liye this use krte h
 }

console.log(JsUser.greeting()); // before adding to object unfreeze it
console.log(JsUser.greetingTwo());

