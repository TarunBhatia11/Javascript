/*
    Array Data Structure in JavaScript
    
    1. An array is a collection of items stored at contiguous memory locations.
    2. It is a data structure that allows you to store multiple values in a single variable.
*/


const myArray = [1, 2, 3, 4, 5];

console.log(myArray); // Output: [1, 2, 3, 4, 5]

console.log(typeof myArray); // Output: object (arrays are a type of object in JavaScript)


const myArray2 = new Array(1, 2, 3, 4, 5);

console.log(myArray2); // Output: [1, 2, 3, 4, 5]
console.log(typeof myArray2); // Output: object (arrays are a type of object in JavaScript)


const myArray3 = new Array(5); // Creates an array with 5 empty slots
console.log(myArray3); // Output: [ <5 empty items> ]
console.log(typeof myArray3); // Output: object (arrays are a type of object in JavaScript)


// Accessing elements in an array
console.log(myArray[0]); // Output: 1 (first element)

console.log(myArray[1]); // Output: 2 (second element)

console.log(myArray[2]); // Output: 3 (third element)   




// copies in array 
const myArray4 = [1, 2, 3, 4, 5];
const myArray5 = myArray4; // myArray5 is a reference to the same array as myArray4

console.log(myArray4); // Output: [1, 2, 3, 4, 5]
console.log(myArray5); // Output: [1, 2, 3, 4, 5]

//Methode in array to perform operations

myArray4.push(6); // Adds 6 to the end of myArray4

console.log(myArray4); // Output: [1, 2, 3, 4, 5, 6]

console.log(myArray5); // Output: [1, 2, 3, 4, 5, 6] (myArray5 reflects the change in myArray4) 

//poping an element from the end of the array
myArray4.pop(); // Removes the last element (6) from myArray4
console.log(myArray4); // Output: [1, 2, 3, 4, 5]
console.log(myArray5); // Output: [1, 2, 3, 4, 5] (myArray5 reflects the change in myArray4)


//unshifting an element to the beginning of the array
myArray4.unshift(0); // Adds 0 to the beginning of myArray4 
console.log(myArray4); // Output: [0, 1, 2, 3, 4, 5]
console.log(myArray5); // Output: [0, 1, 2, 3, 4, 5] (myArray5 reflects the change in myArray4)


//shifting an element from the beginning of the array
myArray4.shift(); // Removes the first element (0) from myArray4  
console.log(myArray4); // Output: [1, 2, 3, 4, 5]
console.log(myArray5); // Output: [1, 2, 3, 4, 5] (myArray5 reflects the change in myArray4)


console.log(myArray.includes(9)); // Output: false (9 is not in the array)
console.log(myArray.includes(3)); // Output: true (3 is in the array)


// Finding the index of an element in the array
console.log(myArray.indexOf(3)); // Output: 2 (index of 3 in the array)
console.log(myArray.indexOf(9)); // Output: -1 (9 is not in the array)


//join operation in array
const myArray6 = [1, 2, 3, 4, 5];
const joinedString = myArray6.join(", "); // Joins the elements of the array into a string with ", " as the separator
console.log(joinedString); // Output: "1, 2, 3, 4, 5"

console.log(typeof joinedString); // Output: string (the result of join is a string)



//slice and splice operations in array
const myArray7 = [1, 2, 3, 4, 5];
const slicedArray = myArray7.slice(1, 4); // Slices the array   
console.log(slicedArray); // Output: [2, 3, 4] (elements from index 1 to 3 are included)

console.log(myArray7); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)


myArray7.splice(1, 2, 6, 7); // Splices the array at index 1, removes 2 elements, and adds 6 and 7
console.log(myArray7); // Output: [1, 6, 7, 4, 5] (elements at index 1 and 2 are replaced with 6 and 7) 


console.log(slicedArray); // Output: [2, 3, 4] (sliced array remains unchanged)


