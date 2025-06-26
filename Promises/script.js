// The solution of the callback hell problem is to use Promises.
let myPromise = new Promise((resolve, reject) => {
    alert("I am alert in Promise");
    resolve(56)
});

console.log("Hello World one!");
setTimeout(function(){
    console.log("Hello World two in 2 seconds!");
} , 2000);
console.log("Hello World 3!");
console.log(myPromise);
