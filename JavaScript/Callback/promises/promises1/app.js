// let promise = new Promise((resolve, reject) =>{
//     console.log("Hello this is Vikas Singh");
//     // resolve("parcel has been delievered successfully");
//     reject("order cancel");
// })


function getData(dataId, getNextData){
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            console.log("dataID", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 2000)
    });
}

let promise = getData(2, () => {
    getData(3,() => {
        getData(4, () => {
            getData(5, () => {
                getData(6)
            })
        })
    })
}
);