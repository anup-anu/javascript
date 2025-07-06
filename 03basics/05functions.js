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
