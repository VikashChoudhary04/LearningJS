let a = 10
const b = 20
var c = 30
let a = 400
if(true)
{
    let a = 10 // it cant be accessed outside the scope
    console.log("Inner :", a); // print 10
    const b = 20 //it cant be accessed outside the scope
    var c = 30 // it will be accessed outside the scope also
}

console.log(a); // print 300
console.log(b);
console.log(c);



function one(){
    const username ="vikash"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);  // scope problwm
    two() // a inner function can access its outer function elements
}
one()

if (true)
{
    const username = "vikash"
    if (username === "vikash"){
        const website = " youtube"
        console.log(username + website); 
    }
    console.log(website) // scope problem we cant access inner block elemnts outside
}
console.log(username); // scope problem

+++++++ interesting +++++++++++++++

function addone(num){
    return num + 1
}
addone(5) // but if we write this thing in line 42 it will give output

const addTwo = function(num){
    return num + 2
}

addTwo(5) // if we write this thing above function it will give error 