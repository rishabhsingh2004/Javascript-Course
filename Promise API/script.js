let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 6000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("value 2");
      reject(new Error("VALUE 2"))
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});

// p1.then((result) => {
//     console.log(result); // value 1
// });

// p2.then((result) => {
//     console.log(result); // value 2
// });

// p3.then((result) => {
//     console.log(result); // value 3
// });
  

//----------Promise API--------------
//let promise_all = Promise.all([p1 , p2 , p3])
//let promise_all = Promise.allSettled([p1 , p2 , p3]) // This me
//let promise_all = Promise.race([p1 , p2 , p3])
//let promise_all = Promise.any([p1 , p2 , p3])
//let promise_all =  Promise.resolve([p1 , p2 , p3]) 
// let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(new Error ("Hey"))
promise_all.then((value)=>{
    console.log(value)
})
