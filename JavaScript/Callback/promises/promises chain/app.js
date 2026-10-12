function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("data" , dataId);
            resolve("success");
        }, 2000);
    });
}


//promise chain - 1st method.

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {                   // This is one method to do
//             console.log(res);
//         })
//     });

//promise chain - 2nd method.
console.log("Getting data 1");
getData(1)
    .then((res) => {
        console.log("Getting data 2");
        return getData(2);
    })
    .then((res) => {
        console.log("Getting data 3");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    })