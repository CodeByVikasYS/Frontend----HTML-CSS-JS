const burger = document.querySelector("#burger");
const navLinks = document.querySelectorAll(".navLinks");

burger.addEventListener("click", () =>{
    navLinks.forEach((link) => {
        link.classList.toggle("show");
    });
});