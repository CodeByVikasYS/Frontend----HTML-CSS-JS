let input = document.createElement("input");

input.placeholder = "Enter password";
input.type = "text";
input.id = "pass";

document.body.appendChild(input);

const button = document.createElement("button");
button.innerText = "show";
document.body.appendChild(button);
button.id = "btn";

button.addEventListener("click" , () => {
    if(input.type === "text"){
        input.type = "password";
        button.innerText = "show";
    }
    else{
        input.type = "text";
        button.innerText = "hide";  
    }
})
;
