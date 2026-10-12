function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");   //yha par jab bhi ye function execute hoga uss time par promise return hoga phele promise unresolved hoga
            resolve("success");    // baad me phir setTimeout me jab jayega at that time the jab reslove will execute after that only the 
        }, 4000);                  // .then function will catch and then after the second function async 2 is going to run like in same as 
    });                            // as above manner as like of asyncFucn1.
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1.....");

asyncFunc1().then((res) => {
    console.log("fetching data2.....");
    asyncFunc2().then((res) => {});
});