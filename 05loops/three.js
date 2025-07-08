//for of loop

const Arr  = [1,2,3,4,5,6]
for (const val of Arr) {
    //console.log(val);
}

const greetings = "Hello World";
for(const greet of greetings){
    //console.log(greet)
}

const map = new Map();
map.set('IN','India');
map.set('USA',"United States of America");
map.set('FR','France');
map.set('IN','India');

//console.log(map);

for(const [key,value] of map){//destructure a key value here
    //console.log(key);
}

const myObj = {
    'game1':"vollyball",
    'game2': "football"
};

for(const key of myObj){
    console.log(key);
}