// This is an external JavaScript file

// Log a message in the browser console
console.log("External JS file is connected!");

// Another function
function greet() {
  alert("Greetings from main.js!");
}

// 🔹 <script> tag is used to write or link JavaScript in HTML
// 🔹 Internal JavaScript goes inside <script> tags
// 🔹 External JavaScript is linked using <script src="filename.js"></script>
// 🔹 Place script before </body> OR use 'defer' if placing in <head>
// 🔹 Don't mix src and inline code in one script tag (not allowed)
// 🔹 Use external JS for clean and maintainable code
