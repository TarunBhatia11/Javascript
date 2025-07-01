// data types are categorized in two parts
//  1. primitive 2. non primitive 



/* 
    1. primitive (memory not directly allocated here)
        - 7 types:
            string 
            number
            boolean
            null
            undefined
            symbol
            BigInt

    2. Reference type or non primitive (memory directly allocated by reference)
        - Array, Objects, Funtions


*/

// Javascript is dynamically typed language


// primitive

const score = 100; // number
const scoreValue = 100.3; //float, double

const isLoggedIn = false; //boolean
const outSide = null; // null
let userEmail; // undefined


const id = Symbol('123'); //symbol
const anotherId = Symbol('123') //symbol

console.log(id == anotherId);

const bignumber = 123456789123456789n //bigNumber


//Non primitive or reference

const heros = ["abc", "123", "hgn"]; //array

let myObj = {
    name:"tarun", //object
    age:21
}

console.table(myObj);


const myFunction = function(){
    console.log("hello World"); //function
}

console.log(typeof bignumber);

console.log(myFunction);


