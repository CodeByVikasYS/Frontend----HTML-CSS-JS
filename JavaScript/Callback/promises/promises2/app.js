const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("success");
        reject("error");
    });
};

let promise = getPromise();

promise.then((res) => {                         // promise.then will work at time when there is success or case is of reolved
    console.log("promise fulfilled", res);
});

promise.catch((err) => {                        // catch will work at that time when there is reject or error cause.
    console.log("rejected", err);
});


/* Here the err and the res are the paramter that will print whatever is defined in the getPromise function either in resolve or catch.
   Like either it is for the err or it is for res  */

