let input1 = document.querySelector("#in");
let adBtn = document.querySelector("#ad");
document.body.style.margin = 0;
document.body.style.padding = 0;

adBtn.addEventListener("click", () =>{
    
    let para = document.createElement("p");
    para.textContent = input1.value;
    let reBtn = document.createElement("button");
    reBtn.innerText = "remove";
    let div = document.createElement("div");
    
    div.appendChild(para);
    div.appendChild(reBtn);
    document.body.appendChild(div);
    div.style.display = "flex";
    reBtn.style.padding = "2px 2px";
    reBtn.style.margin = "0 0 0 1rem";

    reBtn.addEventListener("click" , () => {
        div.remove();
    })
    
})