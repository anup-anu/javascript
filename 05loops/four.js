const  myObj = {
    js: 'javascript',
    rb:'ruby',
    cpp:'c++',
    swift:'swift by apple'
}

for(const key in myObj){
    console.log(`is shortcut for ${myObj[key]}`);
}

const programming = ['js','java','c++','py'];

for(const key in programming){
    console.log(programming[key])
}

//for in loop not done for maps 

//for of loop is used for arrays and for in loops used for objects