console.log("JS connected");

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

