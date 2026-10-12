// This code is little bit complex to understand at starting but in end it will become little simple.


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);

        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// callback hell  -- This is called like this because in this we are callbacking one inside the other multiple times.
getData(1, () => {
    console.log("getting data 2.......");
    getData(2, () =>{
            console.log("getting data 3.......");
        getData(3, () => {
                console.log("getting data 4.......");
            getData(4, () => {
                    console.log("getting data 5.......");
                getData(5)
            })
        })
    });
});

