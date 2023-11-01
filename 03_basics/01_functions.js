function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName // reference
sayMyName() // execution

// Add 2 numbers
function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}
addTwoNumbers(3,4)
const result = addTwoNumbers(3,4) // ye method wrong h bcz result me value nhi ayega


// storing the returning value and printing the value

function addTwoNumbers(number1, number2)
{
    let ressult = number1 + number2 // method1
    console.log(number1+number2);
    // return number1 + number2 // 2nd method
    return result // returning the value
}
addTwoNumbers(3,4)
console.log(result) // yha be return aara h value

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Vikash")) // if you doesnt pass a value it output will be undefined

// checking if value is passed or not
function loginUserMessage(username){ 
    if(username === undefined){  // if(!username) we can use this also
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Vikash"))

// taking multiple parameters keeping in mind future growth

function calculateCartPrice(...num1){ // rest operator/spread operator it takes infinite values
    return num1
}

console.log(calculateCartPrice(200,400,500))


// passing objects to function

const user = {
    username: "vikash",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);


}
handleObject(user) // in this function we are passing object
handleObject({
    username: "vikash",
    price: 399
}) // another way of passing objects in function

// passing array to function
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500])); // another way of passing array
