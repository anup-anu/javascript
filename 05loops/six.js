//const coding = ["java","js","py","swift","c++","ruby","C","html","C#"];

// const values = coding.forEach( (item) =>{
//     console.log(item);
// })//it returns nothing

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num) =>{
    return num > 4 //when we open scope {} then we should write return keyword here as shown here
} )//returns value and stor in myNums variable
//console.log(newNums);

const newnum = []
myNums.forEach((num) =>{
    if(num > 4){
        newnum.push(num);
    }
})

//console.log(newnum)

