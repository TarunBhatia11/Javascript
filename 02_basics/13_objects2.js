/*
    objects Part 2
    * Objects can also be created using the `Object.create()` method, which allows for inheritance

*/

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.isLoggedIn = false;



// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        firstName: "John",
        lastName: "Doe"
    }
}

// console.log(regularUser.fullname.firstName);

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "a", 5: "b", 6: "c"};

const obj = {obj1, obj2};

// console.log(obj);


const obj3 = Object.assign({},obj1, obj2);

// console.log(obj3);

const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4);



console.log(tinderUser.hasOwnProperty("id"));
