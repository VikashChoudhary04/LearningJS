// for each
const coding = ["js", "ruby", "java", "java", "python", "cpp"]
coding.forEach(function (item) {
    console.log(val); // prints the value
}) // function name nhi hoga kuki for each function call back function h 'item' object h array jisko use krke hmlog array access kr skte h


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
    console.log(item.languageName); //item here is an object for accessing the contents of array
})
