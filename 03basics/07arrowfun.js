const user = {
    username:"anoop",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website!`);
        console.log(this);

    }
    
}

user.welcomeMessage(); // output is => Welcome anoop to our website!

user.username = "kiran";
user.welcomeMessage(); // output is => Welcome kiran to our website!

function Chai(){
    let  username = "kiran"; // this will not change the username of the user object
    console.log(this.username); //cant use this inside the function because it is not an object
}

Chai();


const coffee = () =>{
    let username = "kiran"; // this will not change the username of the user object
    console.log(this.username); // cant use this inside the arrow function because it is not an object
}

coffee();


//() => {} // this is an arrow function, it does not have its own this, it will use the this of the parent scope
const addTwo = (num1, num2) => {
    return num1 + num2;
}
//if we use curly bracs the we should use return statement
console.log(addTwo(10, 20)); // output is => 30

const addThree = (num1, num2, num3) => num1 + num2 + num3;  //implicit return, we can use return statement or not, if we use curly braces then we should use return statement
const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) ;   // we may cant use return here
// this is an arrow function with multiple parameters and a single expression
console.log(addThree(10, 20, 30)); // output is => 60
console.log(addFour(10, 20, 30, 40)); // output is => 100
const somthing = (num1, num2) => ({"name" :"Anoop"});// we should wrap in bracs to return an object




