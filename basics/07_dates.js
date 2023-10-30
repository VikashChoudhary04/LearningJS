// Dates

let myDate = new Date()
console.log(myDate.toString()); // Mon Oct 30 2023 14:11:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Oct 30 2023
console.log(myDate.toLocaleString()); // 10/30/2023, 2:11:14 PM
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // time in milliseconds
console.log(Math.floor(Date.now()/1000)); // time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // because month starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})