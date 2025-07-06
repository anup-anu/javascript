function sayMyName(){
    console.log("Anoop");
}

sayMyName(); // output is => Anoop

function sum(a, b){//parameters of the function
    // a and b are parameters
    return a + b;
}//statements after return are not executed

let sumab = sum(10, 20);//arguments passed to the functioncall
console.log(sumab); // output is => 30


function loginUserMessage(username){
    if (username === undefined) { //!username it is same as username === undefined  
        return "Username is required!";
    }
    // if username is not passed, it will return undefined
    return `Welcome ${username} to our website!`;
}

console.log(loginUserMessage("Anoop")); // output is => Welcome Anoop to our website!
//if we didnt pass any argument to the function, it will return undefined
console.log(loginUserMessage()); // output is => Username is required!


//*******************************************function with objects********************************************** */

function caluculateCartPrice(...num1){//rest operator if val1,val2, ...num1 then val1=100, val2=200, num1=[300] in the fallowing execution
    return num1;
}

// console.log(caluculateCartPrice(100,200,300));// output is => [ 100, 200, 300 ]

const user = {
    name: "Anoop",
    price: 100
};

function HandleObject(anyObject){
    console.log(`Name: ${anyObject.name}, Price: ${anyObject.price}`);
}

// HandleObject(user); // output is => Name: Anoop, Price: 100
HandleObject({
    name: "Anoop",
    price: 100
}); // output is => Name: Anoop, Price: 100

const myNewArray = [200,300,400,500];
function returnSecondValue(anyarray){
    return anyarray[1]; // returns the second value of the array
};

//console.log(returnSecondValue(myNewArray)); // output is => 300
console.log(returnSecondValue([100,200,300,400])); // output is => 200