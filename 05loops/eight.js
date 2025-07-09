const myNUms = [1,2,3];

const myTotal =myNUms.reduce(function(acc,currval){
    //console.log(`${acc},${currval}`)
    return acc + currval;
},0)

const mytotal = myNUms.reduce((acc,curval) => acc+curval ,0)

console.log(mytotal)