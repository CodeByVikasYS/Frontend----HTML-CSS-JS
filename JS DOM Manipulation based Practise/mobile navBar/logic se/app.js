/* 

const navBar = document.createElement("div");

const home = document.createElement("div");
const homeLink = document.createElement("a");
homeLink.href = "youtube.com";
homeLink.innerText = "home";

const aboutUs = document.createElement("div");
const aboutUsLink = document.createElement("a");
aboutUsLink.href = "youtube.com";
aboutUsLink.innerText = "about Us";

const contactUs = document.createElement("div");
const contactUsLink = document.createElement("a");
contactUsLink.href = "youtube.com";
contactUsLink.innerText = "contact Us";

document.body.appendChild(navBar);

home.appendChild(homeLink);
aboutUs.appendChild(aboutUsLink);
contactUs.appendChild(contactUsLink);


navBar.appendChild(home);
navBar.appendChild(aboutUs);
navBar.appendChild(contactUs);   

*/

let navBar = document.querySelector("#navBar");

let navLinks = document.querySelectorAll(".navLinks");

let burger = document.querySelector("#burger");

burger.addEventListener("click" , () => {
    navLinks.forEach((link) =>{
        if(link.style.display === "none"){
            link.style.display = "block";
        }
        else{
            link.style.display = "none";
        }
    });
});