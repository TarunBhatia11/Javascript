/*
FUNCTIONS
Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters)
and return outputs (return values). Functions help organize code, making it more readable and maintainable.
// Defining a function
function greet(name) {
    return `Hello, ${name}!`;   
}
*/

// Calling a function
function greet(name) {
    return `Hello, ${name}!`;
}
// console.log(greet("Alice")); // Output: Hello, Alice!


function add1(a,b,c){ // a and b are parameters
    console.log(c);
}

// const result1 = add(3, 10, "Tarun");
// console.log(result1); output: undefined when no return statement is used

// function add(a,b,c){ // a and b are parameters
//     console.log(c);
//     return a+b;
// }

// const result = add( a = 3,b =  10, c = "Tarun"); //a and b are arguments

// console.log(result); // Output: Tarun 13

function loginUserMessage(userName){

    if(userName === undefined){
        return console.log("Please provide a username");
    }
    return console.log(`${userName} just logged in!`);
}

let a = loginUserMessage("Tarun"); // Output: Tarun just logged in!
// console.log(a); // Output: undefined, because the function does not return anything

loginUserMessage(); // Output: undefined, because the function does not return anything


function loginUser(userName = "Guest") { // Default parameter
    // If userName is not provided, it defaults to "Guest"

    if(userName === undefined){
        return console.log("Please provide a username");
    }
    return console.log(`${userName} just logged in!`);
}

loginUser(); // Output: Guest just logged in!
loginUser("Tarun"); // Output: Tarun just logged in!