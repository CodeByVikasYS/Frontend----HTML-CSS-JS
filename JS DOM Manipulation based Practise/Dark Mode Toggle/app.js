let button = document.createElement("button");
button.innerText = "Dark-Mode";
document.body.appendChild(button);


button.addEventListener("click", () => {
    if (button.innerText === "Light-Mode"){
        document.body.style.backgroundColor = "#fff";
        button.innerText = "Dark-Mode";
    }
    else{
        document.body.style.backgroundColor = "#000";
        button.innerText = "Light-Mode";
    }
});