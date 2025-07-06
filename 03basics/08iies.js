//Immediately Invoked Function Expression
(function chai(){
    // named IIfe
    console.log("DB connected")
})();

((name)=>{
    console.log(`Welcome ${name} to our website!`);
})("Anoop");//unnamed iife
// this is an IIFE, it will execute immediately after it is defined

//()() this is also an IIFE, it will execute immediately after it is defined
//most times the global scopes cause pollution, so we use IIFE to avoid that and we use to remove this pollution caused by global declared variablse

//( () => {})() // this is an IIFE using arrow function, it will execute immediately after it is defined
( function aurcode() {
    console.log("Aurcode connected");
}) ();

( ()=>{
    console.log("Aurcode connected");
})();//example for IIFE using arrow function