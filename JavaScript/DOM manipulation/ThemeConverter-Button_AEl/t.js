let btn  = document.querySelector("#btn1");

btn.onclick = (e) => {
    console.log(e);
}
let mode = "light";

btn.addEventListener("click" , themeConverter = () => {
    if( mode === "light")
    {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        console.log("Dark mode");
    }
    else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        console.log("light mode");
    }
});

