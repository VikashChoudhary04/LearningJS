// for in loop Objects pe lgane ke liye
// for of loop used in Arrays
const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}
for (const key in myObject)   // for in loop
{
    console.log(key); // it gives only keys
    console.log(myObject[key]); //gives values
    console.log(`${key} shortcut is for ${myObject[key]}`);

}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in object) {
    console.log(key); // prints arrays key strating from 0
    console.log(programming[key]); // prints value
}