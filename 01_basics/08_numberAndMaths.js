/*
    Number or Maths
*/

const score = 400

const balance = new Number(400)

console.log(typeof score);

console.log(balance);
console.log(typeof balance);


console.log(balance.__proto__);

console.log(balance.toString());

console.log(balance.toFixed(1));

const otherNum = 23.8966;

console.log(otherNum.toPrecision(3));

const hundreds = 100000

console.log(hundreds.toLocaleString('en-IN'));


// ************Maths*************

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log((Math.fround(4.6)));
console.log(Math.floor(3.2));
console.log(Math.ceil(3.2));




const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);







