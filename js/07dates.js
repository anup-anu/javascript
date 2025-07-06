//Dates

let mydate = new Date();
console.log(mydate.toString()); // output is => current date and time in string format, toString returns a string representation of the date
console.log(mydate.toDateString()); // output is => current date in a human-readable format
console.log(mydate.toTimeString()); // output is => current time in a human-readable format
console.log(mydate.toLocaleString()); // output is => current date and time in a locale-specific format


let myTimestamp = Date.now();
console.log(mydate.getTime()); // output is => current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC

console.log(Math.floor(Date.now() / 1000)); // output is => current timestamp in seconds since January 1, 1970, 00:00:00 UTC

let newdate = new Date();
console.log(newdate.getMonth()); // output is => current month (0-11, where 0 is January and 11 is December)

newdate.toLocaleString('deafault', {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit'
}); // output is => current date and time in a locale-specific format with weekday, year, month, day, hour, minute, and second