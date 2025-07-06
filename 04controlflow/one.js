//if statements

//if(condition){block of code} else {block of code}

const userLoggedIn = true
if (userLoggedIn) {
    console.log('Welcome back!')    
}

//<,>, <=, >=, ==, ===, !=, !==

const temperature = 12

if (temperature > 25){
    console.log('It is a hot day');
}else {
    console.log('It is a cold day');
}

const score = 200;
if(score > 100){
    const power = "flying";
    console.log(`You have a score of ${score} and you have the power of ${power}`);
}
//if power is defined inside the if block, it will not be accessible outside the if block
//console.log(power); // this will throw an error because power is not defined outside the if

const balance = 1000;
if (balance > 500) console.log('You have enough balance');//short hand if statement

//if else statements

const bal = 100;
if (bal > 500) {
    console.log('You have enough balance');
}else if (bal >= 100 && bal <= 500) {
    console.log('You do not have enough balance');
}else {
    console.log("you have less than 100 in your account");
}



const userLoggedIn2 = true;
const debitcard = true;
if (userLoggedIn2 && debitcard) {
    console.log('You can make a purchase');
}
else if (userLoggedIn2 && !debitcard) {
    console.log('You can not make a purchase, you need a debit card');
}
else {
    console.log('You need to login to make a purchase');
}


//logical or operators
const userloggedInFromFacebook = true;
const userloggedInFromGoogle = false;
if (userloggedInFromFacebook || userloggedInFromGoogle) {
    console.log('You can login to our website');
}
else {
    console.log('You can not login to our website');
}