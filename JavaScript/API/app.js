const url = "https://jsonplaceholder.typicode.com/users";
const addrs = document.querySelector("#h3");
const button = document.querySelector("#btn");

const getFact = async() => {

    let response = await fetch(url);
    console.log(response);   //JSON format.

    let data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].address);
    console.log(data[0].address.street);    
    addrs.innerText = data[2].address.street;
}

button.addEventListener("click", getFact);

