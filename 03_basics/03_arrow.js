const user = {          // this is a object
    username: "vikash",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // it will print the current values starting from the object
    }
    // This refers to current context it is used to print in the same scope

}
user.welcomeMessage()
user.username = "Choudhary" // username will get changed 
console.log(this) // if it is alone made to run then the output will be {} because it will refer to the node environment which is null ... agr browser ke andar run hoga to windows output dega kuki wo global h


function chai(){
    console.log(this); // thsi will a lot of node values which is global values
    
    // 2nd case
    let username : "vikash"
    console.log(this); // yha pe username ke sath global values bhi show hogi node wali inbuilt

    //3rd case
    let username : "vikash"
    console.log(this.username); // it will give output as undefined as this *this* only works in objects we cant use this in functions

}
chai()



const chai = function (){
    let username = "vikash"
    console.log(this.username); // this will also give undefined output
}
chai()=



// Arrows function
const chai =  () => {
    let username = "vikash"
    console.log(this.username); // this will also give undefined output and if username is hta denge to {} ye output dega
}
chai()

// Arrows basic function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));


// Another way Implicit function
const addTwo = (num1, num2) => (num1 + num2) // agr curly braces lgayenge to return lgana hoga nhi lgayenge to return nhi likhna har with or without braces bhi chlega koi problem nhi h

console.log(addTwo(3,4)); // gives output 7


