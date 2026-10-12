function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data received");
            resolve();
        }, 2000);
    });
}

console.log("Start");

getData();

console.log("End");