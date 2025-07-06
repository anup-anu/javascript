const name  = "Anoop";
const repoCount = 10;

//console.log(name + repoCount+ " value");// output is => Anoop10 value

console.log(`My name is ${name} and my repo count is ${repoCount}`); // output is => My name is Anoop and my repo count is 10
//we can use functions like ToUpperCase, toLowerCase, slice, substring, replace, etc. on strings
console.log(name.toUpperCase()); // output is => ANOOP
console.log(name.toLowerCase()); // output is => anoop
console.log(name.slice(0, 3)); // output is => Ano,slice is used to extract a section of a string
console.log(name.substring(0, 3)); // output is => Ano,substring is similar to slice but does not accept negative indices
console.log(name.indexOf("o")); // output is => 2, indexOf returns the
console.log(name.replace("Anoop", "Anoop Kumar")); // output is => Anoop Kumar
console.log(name.length); // output is => 5

const gameName = new String("Call of Duty");
console.log(gameName[0]); // output is => C
console.log(gameName.__proto__); // output is => String.prototype

console.log(gameName.charAt(0)); // output is => C, charAt returns the character at the specified index
console.log(gameName.indexOf("o")); // output is => 2, indexOf returns the index of the first occurrence of the specified value
console.log(gameName.lastIndexOf("o")); // output is => 6, lastIndex of returns the index of the last occurrence of the specified value

const newString = gameName.substring(0, 4); // output is => Call
const newString2 = gameName.slice(-8, 4); // output is => Call, slice can accept negative indices

const newString3 = "        Anoop         ".trim(); // output is => Anoop, trim removes whitespace from both ends of a string

const url = "https://www.google.com";
url.replace("https://", "http://"); // output is => http://www.google.com, replace can be used to replace a substring with another substring

url.includes("google"); // output is => true, includes checks if a substring is present in the string

const myName = "Anoop-p-Biradar";
const myNameArray = myName.split("-"); // output is => [ 'Anoop', 'p', 'Biradar' ], split splits a string into an array of substrings based on
const myNameJoined = myNameArray.join(" "); // output is => Anoop p Biradar, join joins an array of strings into a single string with the specified separator


//please use bacticks to escape special characters in strings