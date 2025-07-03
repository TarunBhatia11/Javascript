/*
    Object Part 3
*/

const course = {
    course_name: "JavaScript Basics",
    price:999,
    course_teacher: "Tarun",

}

// console.log(course);

const {course_teacher: instructure} = course;

// console.log(course_teacher);
// console.log(instructure);

const {course_name, price} = course;
// console.log(course_name);
// console.log(price);

const {course_name: name, price: cost} = course;
// console.log(name);
// console.log(cost);

const {course_name: cname, price: cprice, course_teacher: cteacher} = course;
// console.log(cname);
// console.log(cprice);
// console.log(cteacher);


//JSON FORMAT
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and a web application as an alternative to XML.

// {
//     "name1": "John",
//     "courseName": "JavaScript Basics",
//     "price": "999"
// }

// some time json format is in the format of an array

// [
//     {}
//     {}
//     {}
// ]

// JSON is often used in APIs to send and receive data. It is language-independent, meaning it can be used with many programming languages, not just JavaScript.

