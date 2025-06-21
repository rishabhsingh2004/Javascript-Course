// Synchronus Programming

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " Years old and has "  + c + " favourite color ."  )

// Asynchronous Programming
// console.log("Start");
// setTimeout(function(){
//     console.log("Hey I am Good");
// } ,3000); 
// console.log("End");

  // Callbacks functions

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}


function goodmorning(error, src) {
  
  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo(); // This is just an example function to handle errors
    return
  }
  alert('Good morning' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 

//-----------  Real-Life Example Jaisa Socho:
// Jaise tum apne friend se keh rahe ho:

// "Mujhe movie ticket book kar ke dena,
// aur jab book ho jaaye, toh mujhe phone kar dena."

// 📞 Tumhara friend ticket book karna ek kaam hai.
// 📞 Tumhe call karna ek callback function hai — jo baad mein chalega jab pehla kaam ho gaya ho.

// function kaamKaro(callback) {
//   console.log("Main kaam kar raha hoon...");
//   // Thoda delay ke baad:
//   setTimeout(function () {
//     console.log("Kaam complete ho gaya!");
//     callback(); // Ab callback chalao
//   }, 2000);
// }

// function baadMeinKaro() {
//   console.log("Ab main baad wala kaam kar raha hoon!");
// }

// kaamKaro(baadMeinKaro);
