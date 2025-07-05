let score  = 33;
let score2 = "33abc"
console.log(typeof score);//output:number
console.log(typeof score2);//output:string

let valueinNumber = Number(score2);

console.log(typeof valueinNumber);//output:number// converts to number but give NaN "33abc"
console.log(valueinNumber);//output NaN

//if "33" this is a score2 the the type of valueInNumber will be 33 and output is 33
//if score2 is null then the valueInNumber value is 0 and output is 0
//if score2 is undefined then also valueInnumber is NaN and output is Nan
//for bolean values true =>1,false =>0(vale of valueInNumber for this)

let isLoggedIn = 1
let booleanIsLoggedin = Boolean(isLoggedIn);
console.log(booleanIsLoggedin);//output => true and is isLoggedin is 0 then output is false
let name = "Anoop"
let booleanName = Boolean(name);
console.log(booleanName);//output is=>true

let someNmber = 33
let stringNumber = String(someNmber);
console.log(stringNumber);//output is=>33
console.log(typeof stringNumber);//output is=>string