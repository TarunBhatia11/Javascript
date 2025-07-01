//String: group of character 

let string1 = "hello"

let string2 = 'tarun'

console.log(string1);

console.log(string2);

console.log(typeof string1);

console.log(typeof string2);

const num = 20

console.log(string1 + " " + string2 + " " + num + " value");


console.log(`Hello my name is ${string2} my age is ${num}`);


const gameName = new String('tarun bhatia')

console.log(typeof gameName);


//methods
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

const newString = gameName.substring(0,4)

console.log(newString);

const anotherSTring = gameName.slice(-1, 1)

console.log(anotherSTring);

const newstringone = "    tarun    "

console.log(newstringone.trim());

const url = "https://abc.%20com"

console.log(url.replace('%20', '-'))



















