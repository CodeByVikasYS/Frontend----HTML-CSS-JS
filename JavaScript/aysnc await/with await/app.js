function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data received");
            resolve();
        }, 2000);
    });
}

async function main() {
    console.log("Start");

    await getData();

    console.log("End");
}

main();