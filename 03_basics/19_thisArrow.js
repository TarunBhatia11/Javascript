const user = {
    username: "Tarun",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()

user.username = "sam"

// user.welcomeMessage()


// function chai() {
//     console.log(this);
// }

// chai();


const chai = () => {
    let username = "tarun"
    console.log(this.username);
}
// chai()


const addTwo = (nums1, nums2) => {
return nums1 + nums2;
}

// console.log(addTwo(1,2));



const addll = (nums1, nums2) => (nums1+nums2);

// console.log(addll(3,4));


const objectReturn = (nums1, nums2) => ({
    username: "Tarun Bhatia",
    sum: nums1 + nums2
})

// console.log(objectReturn(4, 5));











