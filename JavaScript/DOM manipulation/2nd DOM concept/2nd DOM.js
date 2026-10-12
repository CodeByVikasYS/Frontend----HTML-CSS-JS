// Task to append the string to current present String.

h2 = document.querySelector("h2");

console.log(h2.innerText);

h2.append("from apna College stuednts");

console.log(h2.innerText);

// Adding some common special text to the each box of the div with same class names.

// div = document.querySelector(".box");

// console.log(div.innerText);

// div.append("hello guys i am founder of Yntra Sparks");

// console.log(div.innerText);



// Adding some common special text to the each box of the div with same class names.
div = document.getElementsByClassName("box");

console.log(div);
// div[0].innerText = "hello1";
div[1].innerText = "hello2";
div[2].innerText = "hello3";

console.log(div);


// get attribute from the tag of HTML.

box = document.querySelector("div");

console.log(box);

let attr = box.getAttribute("class");

console.log(attr);




//Accessing the style of the particular tag.

let access = document.querySelectorAll(".box");

console.log(access);

div[0].style.backgroundColor = "blue";
div[1].style.backgroundColor = "yellow";
div[2].style.backgroundColor = "lightgreen";



