/*
    Date and Time
*/

const myDate = new Date()

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());


console.log(myDate.toISOString());

console.log(myDate.toJSON());

let myCreateDate = new Date(2023,0,23, 5) // month starts with 0 to 11

let anotherDate = new Date("2023-01-14")

let a = new Date("01-14-2013")

console.log(myCreateDate.toDateString());

console.log(anotherDate.toDateString());

console.log(a.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);


console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday:"long",
})

console.log(newDate);











