/*
    Stack and Heap Memory

    Where stack and heap memory used

    1. Stack memory (used in primitive datatypes)

    2. Heap memory (used by non primitive datatypes)


*/

//stack memory representation

let myYoutubeName = "tarunBhatia"

let anotherName = myYoutubeName


console.log(anotherName);

anotherName = "chaiorcode"
console.log(anotherName);



//heap memory representation

let user = {
    email: "tarunbhatia2809@gmail.com",
    upi: "user@byl"
}

console.log(user);

let user2 = user

console.log(user2);
user2.email = "abc@gmail.com"

console.log(user2);










