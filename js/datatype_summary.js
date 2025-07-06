//there are two types of data typers are there 
// 1. Primitive data types
// 2. Non-primitive data types      
// Primitive data types are the basic building blocks of data in JavaScript. They include:
// 1. Number: Represents both integer and floating-point numbers.
// 2. String: Represents a sequence of characters, enclosed in single or double quotes.
// 3. Boolean: Represents a logical entity and can have two values: true or false
// 4. Undefined: A variable that has been declared but not assigned a value.
// 5. Null: Represents the intentional absence of any object value.     
// 6. Symbol: A unique and immutable data type introduced in ES6, used for object property keys.
// 7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers beyond the safe integer limit of the Number type.
const id = Symbol('123')
const anothrId = Symbol('123');

console.log(id === anothrId); // output is => false 




// Non-primitive data types, also known as reference types, are more complex and can hold collections of values or more complex entities. They include:
// 1. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
//// 2. Array: A special type of object used to store ordered collections of values, which can be of any data type.
// 3. Function: A callable object that can be executed, and can also be treated as a first-class object, meaning it can be assigned to variables, passed as arguments, and returned from other functions.

const heros = ['spiderman', 'batman', 'superman', 'ironman'];
let myObj = {
    name: 'John',
    age: 30,
    isHero: true,
    powers: heros,
}
let sum = function (a, b) {
    return a + b;
}

//**************************************************************************************
// Stack (primitive data types) vs Heap (non-primitive data types)
// Primitive data types are stored in the stack, which is a region of memory that stores static

let myyoutubrName = 'codewithharry'; // moves to stack
let anotherName = myyoutubrName; // anotherName points to the same memory location as myyoutubrName
anotherName = 'codewithharry2'; // anotherName now points to a new memory location, myyoutubrName remains unchanged
console.log(myyoutubrName); // output is => codewithharry
console.log(anotherName); // output is => codewithharry2

let user = {
    email: "user@google.com",
    upi: "user@upi"
}

let user2 = user; // user2 points to the same memory location as user
user2.email = "user@microsoft.com"; // modifying user2 also modifies user


console.log(user.email); // output is => user@microsoft.com
console.log(user2.email); // output is =>user@microsoft.com
