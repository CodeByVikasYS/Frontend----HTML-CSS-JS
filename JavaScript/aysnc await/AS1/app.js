//any function can be made async by using "async" keyword.

// async function hello(){
//     console.log("hello");
// }


function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Weather data");
            resolve("success");
        }, 2000);
        
    });
}

async function knowWeatherdata() {
    await api();
    // console.log(result);
    await api();
}

//I above code i have a lot of confusion.

