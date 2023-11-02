// if
// conditional checks <, >, <=, >=, ==, !=, === (for strictly checking its type matches too), !== ( anti pattern equal to !=)
if(condition){
    //statements
}
else{
    // statements
}

const isUserLoggedIn = true
if(isUserLoggedIn){

}

// Implicit scope means we imagine that therew is a scope but it is written in one line only
const balance = 1000
if (balance > 500) console.log("test"); // Multi line s possible using , nut never write it it is not advisable


//Nested if
if(condition){

}
else if(condition){

}
else{

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard)
{
    console.log("Allow to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
