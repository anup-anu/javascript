//for(variable_declaration ; condition ; updation){set of instructions to execute}

for(let i = 0; i<10 ; i++){
    if (i == 5){
        //console.log("5 is best number");
    }
    //console.log(i);
}//output:0,1,2,3,4,5,6,7,8,9;
//i is not accessible outside the loop

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop ${j}`);
        //console.log(i + '*' + j + "=" + i*j);  
    } 
}

let myArr = ["flash","batman","superman"];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element)
}



//break and continue

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue;
    }
        console.log(`value is ${index}`);
}