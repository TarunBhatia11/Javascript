//Immediately Invoked Function Expressions (IIFE)


function chai() {
    console.log('DB connected');
}

// chai();

(function chai() {
    console.log('TARUN BHATIA');
})();

//global scope ke pollution ko hatane ke liye hi immediate fe ka use karte hai 

( (name) => {
    console.log(`connected ${name}`);
} ) ("Tarun")



