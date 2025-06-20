//document.write("Hello, World!");

const sum = (a , b , c) => {
    console.log("Yes i am adding" + (a + b))
    // return a + b ;
};

setTimeout(sum , 1000 , 5 , 10 , 15); // This will call the sum function after 2 seconds with arguments 5, 10, and 15



// let a = setTimeout(function(){
// // document.write("This message is displayed after 5 seconds.");
// alert("This message is displayed after 5 seconds.");
// } , 5000);
// let b  = prompt("Do you want to clear the timeout? (yes/no)");
// if ("no" == b){
// clearTimeout(a);
// } else{
// console.log(a);
// }

//setInterval(function(){
//    alert("This message is displayed every 2 seconds.");
//} , 2000); // This will call the function every 2 seconds


const difference = (a, b) => {
    console.log("Yes I am subtracting " + (a - b));
    return a - b;
};

// Ask user for inputs using prompt
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

// Call the function every 2 seconds
setInterval(difference, 2000, num1, num2);
