let button = document.createElement("button");
let button1 = document.createElement("button");

button.innerText = "click me";
button1.innerText = "click me 2 times";

console.log(button);
console.log(button.innerText); 


let div = document.querySelector("div");

div.append(button);


div.prepend(button1);


let mainHeading = document.createElement("h1");

mainHeading.innerHTML = "<i>HIi, guys mai hu apka pyara Vikas</i>"

let body = document.querySelector("body");

body.prepend(mainHeading);

let para = document.createElement("p");

para.innerHTML = "<b> Hello Guys welcome back to the channel";

let h4 = document.querySelector("h4");

h4.append(para);