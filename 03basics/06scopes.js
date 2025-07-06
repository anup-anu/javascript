// let a = 10;
// const b = 20;
// var c = 30;
//global scope variables can be accessed anywhere in the code
// but if we declare a variable inside a function, it is not accessible outside the function

if(true){
    let a = 100;// let is block scoped
    const b = 200;// const is block scoped
    var c = 300; // var is function scoped
}
// console.log(a); // error: a is not defined
// console.log(b); // error: b is not defined
// console.log(c); // output is => 300


//******************************************next version of scopes**************************************************** */

function one(){
    const username = "anoop";
    function two(){
        const website = "google.com";
        console.log(username);
    }
    //console.log(website); // error: website is not defined
    two(); // output is => anoop if this not called then it gives nothing bcoz it is not executed
}
one();

if(true){
    const username = "Anoop";
    if(username === "Anoop"){
        const website = "google.com";
        console.log(`Welcome ${username} to ${website}`); // output is => Welcome Anoop to google.com
    }
    //console.log(website); // error: website is not defined
}

//console.log(username); // error: username is not defined;



//******************************************INTRESTING****************************************** */


function addOne(num){
    return num + 1;
}

console.log(addOne(10)); // output is => 11


const addTwo = function(num){
    return num + 2;
}

addTwo(10); // output is => 12

//if we call function before function declaration its ok but if we store that function inside a variable then we cannot call it before declaration

