const flipkartUser = new Object() // 1st way ofdeclaring objects
const flipkartUser = {} // 2nd way of declaring object both will return empty object on printing {} like this
console.log(flipkartUser);


flipkartUser.id = "123abc"
flipkartUser.name = "abc"
flipkartUser.isLoggedIn = false
// adding values to flipkartUser object

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname: {
            firstname : "Vikash",
            lastname : "Choudhary"
        }
    }
}

console.log(regularUser.fullname); // isse pura internal object print hojaega agr inner object access krna h to . use krke access hoga

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

const obj3 = { ob1, obj2}
const obj4= Object.assign({},obj1,obj2) // combines two objects and prints as 1
// {} emty object dena compulsory h bcz wo as a target act krega jisme values jayega source se
console.log(obj4);

const obj5 = {...obj1, ...obj2} // object spreader
console.log(obj5);

const users = [
    {
        id: 1,
        email: "@gmail.com"
    }
    {
        // values
    }
]  // Array of objects

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // prints both the keys and values

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checking whether this property is there or not
 


// destructuring

const course = {
    courseName : "js in hindi",
    price: "999"
    courseInstructor: "vikash"
}

// course.price 1st way

const {price} = course
console.log(price); // 2nd way

const {price : p} = course
console.log(p); // 3rd way

// {
    // "name" : "vikash"
    // "coursename" : "js in hindi"
    // "price" : "free"
// } 

// json file structure when a API is called

