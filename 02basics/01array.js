const myArr = [1, 2, 3, 4, 5];
console.log(myArr[0]); // output is => 1

const myarr2 = new Array(1, 2, 3, 4, 5);


//Array Methods

myArr.push(6); // adds 6 to the end of the array
myArr.pop(); // removes the last element from the array
myArr.unshift(); // adds elements to the beginning of the array
myArr.shift(); // removes the first element from the array
myArr.splice(2, 1); // removes the element at index 2
myArr.slice(1, 3); // returns a new array with elements from index 1 to 3 (not includng index 3)