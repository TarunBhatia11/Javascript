/*
    DOM - DOCUMENT OBJECT MODEL


    The DOM allows programming languages, ;ilke js, to access and manipulate the documents structure, style and content dynamically 

    each node in the tree represents a [part of the document, like an element, text, attributes
    
    it's the foundation for mkingthe web pages interactive and responsive

    the DOM is a w3c - world wide web consortium standard

    DOM can be the shortened form of the name dominic

    DOM in old language means judgement, law, realm

    The DOM is a cross platform and language independent API  that treats an HTML and XML document as a tree structure wherein each node is an object representing a part of the document 

                    Window
                       |
                    Document
                       |
                      HTML
                    /     \
                head       body
                /  \       /  \

    TO manipulate styling we directly change in document 

*/


// SELECT HEADING BY ID
// const heading = document.getElementById('heading-1')
// console.log(heading.innerText);
// console.log(heading.innerHTML);


// // heading.innerText = "From js file"; //change the text 


// //Query Selector ALL
// const heading1 = document.querySelector("#heading-1")
// // console.log(`${heading1} This is Query Selector`);


// const submit_dom = document.querySelector("#heading-1")

// heading1.style.backgroundColor = "red"
// heading1.style.border = "1px solid black"




//create element and view it on browser

const data = ["mango", "banana", "apple", "kiwi", "pineapple"]

const ul = document.getElementById("addList")

for(let i=0; i<data.length; i++){
    const liTag = document.createElement("li");
    liTag.innerText = data[i];
    // console.log(liTag);
    ul.appendChild(liTag)
}




const ulList = ["List 1", "list 2", "list 3"]
const data_in_list = ["A", "B", "C", "D"]


const ul_2 = document.getElementById("list")


for(let i=0; i<ulList.length; i++){
    const new_ul_tag = document.createElement("ul");
    new_ul_tag.innerText = ulList[i];
    ul_2.appendChild(new_ul_tag)
    ul_2.style.display = "flex";
    ul_2.style.flexDirection = "row"
    for(let j=0; j<data_in_list.length; j++){
        const new_data_in_list = document.createElement("li");
        new_data_in_list.innerText = data_in_list[j];
        new_ul_tag.appendChild(new_data_in_list)
        new_ul_tag.style.display = "flex";
        new_ul_tag.style.flexDirection = "column"
    }
}







