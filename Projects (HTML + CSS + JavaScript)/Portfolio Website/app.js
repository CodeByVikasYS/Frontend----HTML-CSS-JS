
// Validating that JS is connected through console window 
console.log("JS connected");

// Adding the theme converter logic in the whole body.
const themeBtn = document.querySelector("#themBtn");

let mode = "light";
themeBtn.addEventListener("click" , () =>{
    if (mode == "light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})


// Adding the burger button on the nav link for small width screen.
const menuBtn = document.querySelector("#menuBtn");

const navLinksCont = document.querySelector("#navLinksCont");

menuBtn.addEventListener("click", () => {
    navLinksCont.classList.toggle("show");   
});

/* Conclusion of classList
classList is a property of an HTML element that allows us to access and manipulate its CSS classes using JavaScript.
Its commonly used methods are:
- add("className") — adds a class.
- remove("className") — removes a class.
- toggle("className") — adds or removes a class depending on whether it already exists.
- contains("className") — checks whether a class exists.    */ 




