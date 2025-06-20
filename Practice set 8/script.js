// document.getElementById("google").addEventListener("click", function() {
//  let url = "https://www.google.com";
// })

// setInterval(  function() {
//   let url = "https://www.google.com";
//   console.log("Redirecting to Google...");
// },2000);

setInterval(function() {
     document.querySelector("#bulb").classList.toggle("bulb");  
}, 300);


     //----------(.classList.toggle("bulb"))---------------
// Yeh line ka kaam hai:
// Agar element me "bulb" class hai, to usse hatana.
// Agar "bulb" class nahi hai, to usse add karna.
// Yani class bar-bar on/off hoti rahegi.

