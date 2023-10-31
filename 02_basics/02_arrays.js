const dc_heros = ["superman", "flash", "batman"]
const marvel_heros = ["thor","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // will print arrayinside array

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // prints both array in single array

const all_new_heros = [...marvel_heros, ...dc_heros] // splitting a single array into two parts
console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // changes multi dimensional array to single array
console.log(real_another_array);

console.log(Array.isArray("Vikash")) // gives output false
console.log(Array.from("Vikash")); // transforms it to Array
console.log(Array.from({name:"hitesh"})); // gives output null array because it cant conert key value pairs

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // changes integer to array



