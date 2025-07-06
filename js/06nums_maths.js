const score = 100;

const balance = new Number(100.5);
console.log(balance); // output is => [Number: 100.5], Number object is created using the Number constructor
console.log(balance.toFixed(2)); // output is => 100.50, toFixed formats a number using fixed-point notation

const num1 = 10;
console.log(num1.toPrecision(2)); // output is => 10, toPrecision formats a number to a specified length

const num2 = 10000000;
console.log(num2.toLocaleString("en-IN")); // output is => 1,00,00,000, toLocaleString formats a number according to the locale and options provided

//****************************************************MAths************************************************************** */

console.log(Math); // output is => Math object, contains properties and methods for mathematical constants and functions
console.log(Math.PI); // output is => 3.141592653589793, PI
console.log(Math.E); // output is => 2.718281828459045, E (Euler's number)
console.log(Math.sqrt(16)); // output is => 4, sqrt returns the square root
console.log(Math.abs(-10)); // output is => 10, abs returns the absolute value
console.log(Math.pow(2, 3)); // output is => 8, pow returns the base raised to the exponent
console.log(Math.max(1, 2, 3, 4, 5)); // output is => 5, max returns the largest of the given numbers
console.log(Math.min(1, 2, 3, 4, 5)); // output is => 1, min returns the smallest of the given numbers
console.log(Math.random()); // output is => a random number between 0 and 1, random returns a pseudo-random number
console.log(Math.floor(4.7)); // output is => 4, floor rounds down to the nearest integer
console.log(Math.ceil(4.1)); // output is => 5, ceil rounds up to the nearest integer
console.log(Math.round(4.5)); // output is => 5, round rounds to the nearest integer
console.log(Math.trunc(4.9)); // output is => 4, trunc removes the fractional part of a number

console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

Math.floor(Math.random() * (max - min) + min); // output is => a random number between 10 and 20, generates a random number within a specified range
