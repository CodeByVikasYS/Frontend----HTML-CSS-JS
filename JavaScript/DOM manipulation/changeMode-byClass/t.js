let btn = document.querySelector("#btn1");
let body = document.querySelector("body");
let currMode = "light";

btn.addEventListener("click" , toggleButton = () => {
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        // body.style.backgroundColor = "black";
        body.classList.remove("black");
        body.classList.add("white");
        console.log(currMode);
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        // body.style.backgroundColor = "white";
        body.classList.remove("white");
        body.classList.add("black");
        console.log(currMode);
    }
});