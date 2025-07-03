/*
    Functions part 2
*/

function calculateCartPrice(num1){
    return num1;
}

// console.log(calculateCartPrice(100)); // Output: 100

function calculateCartPrice2(...num2){
    return num2;
}

// console.log(calculateCartPrice2(200,100,300)); // Output: [200, 100, 300]

function abc(var1,var2,...args){
    console.log(var1,var2,args);
}

// abc(1,2,3,4,5);


const user ={
    name: "Tarun",
    price: 100
}

function printUser(name, price){
    console.log(`user name is ${name} and price is ${price}`);
}

// printUser(user.name, user.price); // Output: user name is Tarun and price is 100


const myNewArray = [1,2,3,4,5];

function returnSecondElement(getArray){
    return arr[1];
}

// console.log(returnSecondElement(myNewArray)); // Output: 2




