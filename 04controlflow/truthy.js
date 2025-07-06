//truthy and falsy values

const userEmail = "anup@gamil.com"
if(userEmail){
    console.log("got user email");//this will execute for this
}else{
    console.log("Dont have user email");
}

const userEmail1 = ""
if(userEmail){
    console.log("got user email");
}else{
    console.log("Dont have user email");//this wll run for this 
}


//falsy values
//falsy,0,-0,BigInt 0n,"",null,undifined,NaN(not a number)
//all other than these are truthy value

//truthy value
//"0","false"," ",[],{},function(){}

const useremail = [];
if (useremail.length === 0){
    console.log("Array is empty");
}
const EMTYOBJ = {}
if(Object.keys(EMTYOBJ).length === 0){
    console.log("Object is empty")
}