// let p0 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolve after 2 seconds");
//         resolve(45);
//     }, 2000);
// });

// p0.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => { // here we are returning a new promise
//         setTimeout(() => {
//              resolve ("Promise 2 resolved after 3 seconds") }, 3000);
//         });
//     }).then((value) => {
//         console.log("We are done with promise 2");
//         return 2     // here we are returning a value, not a promise
//     }).then((value) => {
//         console.log("We are done with promise 3");
//     });

    // Question: Rewrite the loadscript function using promises.

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            let script = document.createElement('script'); // this creates a new script element
            script.type = 'text/javascript'; // this means that the script is a javascript file
            script.src = src; // this sets the source of the script to the src parameter
            document.body.appendChild(script); // this appends the script to the body of the document
            script.onload = () => {         // this means that when the script is loaded, we will resolve the promise
                resolve("Script loaded successfully");
            };
            script.onerror = () => {         // this means that if there is an error loading the script, we will reject the promise
                reject(false);
            };
        });
    }

    let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js");
    p1.then((value) => {
        console.log(value);
        return loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"); // this returns a new promise which will be resolved when the second script is loaded
    }).then((value) => {
        console.log("Second script ready" );
        return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js"); 
    }).then((value) => {
        console.log("All scripts loaded successfully" );
    })
    .catch((error) => {
        console.log("Error loading script", error);
    });