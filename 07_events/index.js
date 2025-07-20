const btn = document.getElementById('btn')
const container = document.getElementById('container')

container.style.width = "500px"
container.style.height = "500px"
container.style.border = "1px solid black"
container.style.display = "flex"
container.style.flexDirection = "row"
container.style.justifyContent = "center"
container.style.alignItems = "center"



// how to change color 

// btn.onclick = ()=>{
//     // console.log("hellooo");

//     container.style.backgroundColor = 'red'
//     // container.style.padding = "10px 10px 10px 10px"

// }

// btn.addEventListener('click', ()=>{
//     container.style.backgroundColor = 'pink'
// })



// change color by double clicking

btn.addEventListener('click', ()=>{
    alert("Write the message in console");
    // const isChange = confirm("color change"); //return true or false

    const change_color_by_input = prompt("Which Color?") //user input 
    container.style.backgroundColor = `${change_color_by_input}`
})



const div = document.getElementById('change color')

div.style.width = "500px"
div.style.height = "500px"
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.backgroundColor = "grey"

const Change_color = document.getElementById('color change')

const submit = document.getElementById('submit')

submit.addEventListener('click', (e)=>{
    const cc = Change_color.value
    console.log(cc);
    div.style.backgroundColor = `${cc}`;
})




const container_3 = document.getElementById('container3')

container_3.style.width = "500px"
container_3.style.height = "500px"
container_3.style.display = "flex"
container_3.style.flexDirection = "column"
container_3.style.justifyContent = "center"
container_3.style.alignItems = "center"
container_3.style.border = "1px solid black"



const submit_3 = document.getElementById('submit 3')

function random_generator(number){
    return Math.floor(Math.random() * number +1);
}

submit_3.addEventListener('click', ()=>{
    const random_color = `rgb(${random_generator(255)}, ${random_generator(255)}, ${random_generator(255)})`;

    // console.log(random_color);
    

    container_3.style.backgroundColor = random_color;
})