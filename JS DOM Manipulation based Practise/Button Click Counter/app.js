const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

let count = 0;


const output = document.createElement("p");
output.textContent = count;
document.body.append(output);

button.addEventListener("click" , () => {
    count = count + 1;
    output.textContent = count;
})