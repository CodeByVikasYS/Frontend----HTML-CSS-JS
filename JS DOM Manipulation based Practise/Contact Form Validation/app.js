const from = document.querySelector("form");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");


from.addEventListener("submit" , () => {

    if(name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === ""){
        alert("Please enter all the fields");
    }   
    else{
        alert("form submitted Successfully");
    }
})


// In this code what i have mainly learnt is like input element ke andar ka maal nikalne ke liye we use it's Id.value and also along with 
// that whenever we extract the value form the input tag at that time we also simultaneously trim that value in order to remove extrafeatuers.
// so all together we use like 

// id.value.trim()