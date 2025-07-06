// singleton 
// object literal
//Object.create // its a constructor function where singleton is created

const mySym = Symbol("key1");


const JsUser ={
    name: "anoop",
    "full name": "anoop kumar",
    [mySym]: "mySymbol", // using symbol as a key  we have declare a symbol variable above
    age: 18,
    location: "india",
    email:"user@gmai.com",
    isLoggedIn: false,
    lastLoginDates :["monday", "tuesday", "wednesday"]
}

console.log(JsUser.email); // output is => user@gmai.com
console.log(JsUser["email"]); // output is =>user@gmai.com
console.log(JsUser["full name"]); // output is => anoop kumar
//console.log(JsUser.full name);//Error: Uncaught SyntaxError: Unexpected identifier
console.log(JsUser[mySym]); // output is => mySym its not using the symbol variable so use [mysym] to access the symbol key in object

JsUser.email = "anup@yahoo.com" //changes the email value
//Object.freeze(JsUser); // freezes the object so that no changes can be made to it
JsUser.email = "Anup@chatgpt.com"; // this will not change the email value as the object is frozen
console.log(JsUser.email); // output is => anup@yahoo.com

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello World");
}

console.log(JsUser.greeting()); // output is => Hello World

JsUser.greetintwo = function(){
    console.log(`Hello ${this.name}`);// using this keyword to access the name property of the same object
}

console.log(JsUser.greetintwo()); // output is => Hello anoop


//*******************************************************Objects 2****************************************************** */

const tinderUser = new Object(); // creating an object using the Object constructor and its singleton object
const googleUser = {} // creating an object using object literal notation

tinderUser.id = "12345";
tinderUser.name = "Anoop Kumar";
tinderUser.age = 18;
tinderUser.location = "India";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // output is => {}

const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        firstName: "Anoop",
        lastName: "Kumar",
        adresses:{
            permanent: "India",
            temporary: "USA"
        }
    }
};//nested object


console.log(regularUser.fullName.firstName); // output is => Anoop use . to access the nested object properties

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 ={obj1, obj2}; // creating an object with two objects as properties and we get objects inside an object

const obj3 = Object.assign({},obj1, obj2); // merges obj2 into obj1 Object.assign(target, ...sources) method creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object. The first argument is the target object, and the rest are source objects.
console.log(obj3); // output is => {1: "a", 2: "b", 3: "c", 4: "d"} merges both objects into one object

const obj4 = {...obj1, ...obj2}; // using spread operator to merge both objects into one object

const users = [
    {id: 1, name: "Anoop", age: 18},
    {id: 2, name: "John", age: 20}
]; // array of objects normally we get this from api or database



console.log(Object.keys(tinderUser)); // output is => ["id", "name", "age", "location", "isLoggedIn"] gets the keys of the object



console.log(tinderUser.hasOwnProperty("id")); // output is => true checks if the object has the property id

