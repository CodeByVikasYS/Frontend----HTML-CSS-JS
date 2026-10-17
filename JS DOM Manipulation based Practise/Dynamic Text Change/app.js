let heading = document.createElement("h1");
heading.id = "head";
document.body.appendChild(heading);

let input = document.createElement("input");
input.type = "text";
input.id = "in";
document.body.appendChild(input);

const button = document.createElement("button");
button.innerText = "click me";
button.id = "btn";
document.body.appendChild(button);

button.addEventListener("click" , () =>{
    heading.innerText = input.value;
})

console.log(input.value);              


// Learning from this qusetion is that to fetch the value from the input element or any other element is that like we should use tag.value 
// to fetch value inside it.