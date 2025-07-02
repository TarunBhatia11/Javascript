/*
    * Objects in JavaScript are collections of key-value pairs.
    * They can store various data types, including arrays and other objects.
    * Objects are created using curly braces `{}` and can be accessed using dot notation or bracket notation.   
    * Objects can also be created using the `new Object()` syntax, but the literal notation is more common and preferred.
    * Objects can contain methods, which are functions associated with the object.
    * Objects can be nested, meaning an object can contain other objects or arrays as values.
    * Objects are mutable, meaning their properties can be changed after creation.
    * Objects can be iterated over using `for...in` loops or `Object.keys()`, `Object.values()`, and `Object.entries()` methods.
    * Objects are a fundamental part of JavaScript and are used to represent real-world entities and data structures.
    * Objects can be used to create complex data structures and are essential for object-oriented programming in JavaScript.
*/


const myObject = {
    name: "Tarun",  // Key-value pair where 'name' is the key and 'Tarun' is the value
    age: 25,        // Another key-value pair
    hobbies: ["reading", "coding", "gaming"], // An array as a value        
    address: {      // An object as a value
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(myObject);

// console.table(myObject); // Displays the object in a table format in the console

console.log(myObject.name); // Accessing a property using dot notation
console.log(myObject["age"]); // Accessing a property using bracket notation

//pushing and adding new properties to the object
myObject.email = "tarunbhatia2809@gmail.com";

console.log(myObject.email);
console.log(myObject);

myObject.hobbies.push("travelling");

console.log(myObject.hobbies); // Output: ['reading', 'coding', 'gaming', 'travelling']


myObject.greeting = function(){
    console.log("hello my name is xyz");
}

console.log(myObject.greeting()); // Output: hello my name is xyz

myObject.greeting2 = function(){
    console.log(`hello my name is ${this.name}`);
}

console.log(myObject.greeting2()); // Output: hello my name is Tarun






