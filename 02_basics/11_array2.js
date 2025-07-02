//Array part 2 

const myArray = [1, 2, 3, 4, 5];
const myArray2 = new Array(1, 2, 3, 4, 5);

console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(typeof myArray); // Output: object (arrays are a type of object in JavaScript)

myArray.push(myArray2); // Adds myArray2 as a single element to myArray
console.log(myArray); // Output: [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]]
console.log(typeof myArray); // Output: object (arrays are a type of object in JavaScript)


myArray.concat(myArray2); // Concatenates myArray2 to myArray
console.log(myArray); // Output: [1, 2, 3, 4    , 5, [1, 2, 3, 4, 5], 1, 2, 3, 4, 5]        


const all_new_array = myArray.concat(...myArray); // Creates a new array that is the concatenation of myArray and myArray2
console.log(all_new_array.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// Using the spread operator to flatten the array
const flattenedArray = [...myArray, ...myArray2];   
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]



console.log(Array.from("Tarun")); // Output: ['T', 'a', 'r', 'u', 'n'] (converts a string to an array of characters)


console.log(Array.from({
    length: 5,
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e'
}));

