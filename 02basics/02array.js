const marvel_heroes = ["thor", "ironman","spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

//marvel_heroes.push(dc_heroes); // adds dc_heroes array to the end of marvel_heroes
console.log(marvel_heroes); // output is => ["thor", "ironman", "spiderman", ["superman", "batman", "flash"]]
//console.log(marvel_heroes[3][1]); // output is => "batman"

marvel_heroes.concat(dc_heroes); // combines both arrays into a new array
console.log(marvel_heroes.concat(dc_heroes)); // output is => ["thor", "ironman", "spiderman", "superman", "batman", "flash"]
console.log(marvel_heroes); // output is => ["thor", "ironman", "spiderman"]push add array to existing and concat creates a new array


const allNewHeroes = [...marvel_heroes, ...dc_heroes]; // spread operator to combine both arrays into a new array
console.log(allNewHeroes); // output is => ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]; // nested array

const real_array = anotherarray.flat(Infinity); // flatten the array to a depth of 2
console.log(real_array); //output is => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.from("hello")); // converts a string to an array of characters
// output is => ["h", "e", "l", "l", "o"]

console.log(Array.from({name: 'hello'}));//empty array and imp for interviews

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3)); // creates an array from the arguments passed
// output is => [100, 200, 300]

console.log(Array.isArray(marvel_heroes)); // checks if the variable is an array
// output is => true


