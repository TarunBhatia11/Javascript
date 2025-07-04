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

 


function myFunction(){
    console.log("hieee");
    console.log("qwerty");
}

// myFunction()


function sum(a,b){
    s = a+b;
    console.log("before return");
    return s;
}

let val = sum(10,20);
// console.log(val); // Output: 30



function countVowel(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
    }
    return count;
}
}
let str = "Hello World";
let vowelCount = countVowel(str);
// console.log(`Number of vowels in "${str}" is ${vowelCount}`); // Output: Number of vowels in "Hello World" is 3



// for each loop

let arr = [1,2,3,4,5];

arr.forEach(function printValue(val, index, arr){
    // console.log(val,index, arr);
})





arr.forEach(function printSquare(val){
    let square = val * val;
    // console.log(`square of ${val} is ${square}`);
})


arr.forEach((num) =>{
    let square = num * num;
    // console.log(`square of ${num} is ${square}`);
})

let square = (num) =>{
    // console.log(`square of ${num} is ${num * num}`);
    
}

arr.forEach(square);

let myArr = arr.map((val) =>{
    return val;
})

// console.log(myArr); // Output: [1, 2, 3, 4, 5]



let evenNumbers = arr.filter((val) =>{
    return val%2 == 0;
})

// console.log(evenNumbers);
// Output: [2, 4]


let output = arr.reduce((previousValue, CurrentValue) =>{
    return previousValue + CurrentValue;
}
);

// console.log(output);









