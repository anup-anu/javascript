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

//if we want to convert string to number then we can use parseInt() and parseFloat() methods

//*************************************Operations********************************** */

let value = 3
let negativeValue = -value;
console.log(negativeValue);//output is=>-3

console.log(2+2);//output is=>4
console.log("2"+"2");//output is=>22
console.log("2"+2);//output is=>22
console.log(2+"2");//output is=>22
console.log(2-2);//output is=>0
console.log("2"-2);//output is=>0
console.log(2-"2");//output is=>0
console.log("2"-"2");//output is=>0
console.log("2"*"2");//output is=>4
console.log("2"/"2");//output is=>1
console.log(2*2);//output is=>4
console.log(2/2);//output is=>1
console.log(2%2);//output is=>0
console.log(2%3);//output is=>2
console.log("1" + 2 +2);//output is=>122
console.log(1 + 2 + "2");//output is=>32
console.log("1" + 2 - 2);//output is=>1
console.log(1 + 2 - "2");//output is=>1
console.log(true);//output is=>true
console.log(+true);//output : Error: Uncaught SyntaxError: Unexpected token '+'


let str1 = "Anoop"
let str2 = "Kumar"
let str3 = str1 + " " + str2;
console.log(str3);//output is=>Anoop Kumar

let x = 10;
let y = x++;//postfix increment first assigns value of x to y and then increments x
console.log(x,y);//output =>11,10

let a = 10;
let b = ++a;//prefix increment first increments a and then assigns value of a to b
console.log(a,b);//output =>11,11
