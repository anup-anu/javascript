const coding = ["java","js","py","swift","c++","ruby","C","html","C#"];

// coding.forEac(function (item){//item is parameter here
//     console.log(item);
// });

// coding.forEach((item) => {
//     console.log(item);
// });

function printMe(item){
   // console.log(item);
}

//coding.forEach(printMe);

coding.forEach((item,index,arr) =>{
   // console.log(item,index,arr);
})

const myCoding = [
    {
        langname:"js",
        lanfilename:"jsfile"
    },
     {
        langname:"java",
        lanfilename:"javafile"
    },
     {
        langname:"python",
        lanfilename:"pyfikle"
    }
];
myCoding.forEach((item) => {
    console.log(item.langname);//accesscing the particular values from the object
})
