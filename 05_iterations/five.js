// for each
const coding = ["js", "ruby", "java", "java", "python", "cpp"]
coding.forEach(function (item) {
    console.log(val); // prints the value
}) // function name nhi hoga kuki for each function call back function h 'item' srf ek variable h array traverse krne ke liye kuki ye function array ke andar chl ra h to isliye har value khud me ek parameter rhega

// using Arrow
coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

const myCoding= [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
    languageName: "java",
    languageFileName: "java"
    },
    {
    languageName: "python",
    languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName); //item here is an object for accessing the objects of array
})
