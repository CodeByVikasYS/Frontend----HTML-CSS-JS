function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            reject("faliure");
        }, 5000);
    });
}

//Async await 

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}