let x =(document.getElementsByTagName("span")[0]);
console.log(x);// Get the first <span> element in the document
let y =(document.getElementsByTagName("span")[0]);
console.dir(y);// Get the first <span> element in the document and log it to the console

console.log(document.body.firstChild.nodeName);// Log the first child of the body and its node name
console.log(document.body.firstElementChild.nodeName);// Log the first element child of the body and its node name


//first.innerHTML = "<i>Hello</i>"; // Change the inner HTML of the first element with id 'first' to "Hello World"

//first.outerHTML = "<h1>Hello World</h1>"; // Change the outer HTML of the first element with id 'first' to "Hello World" wrapped in an <h1> tag

//document.body.firstChild.nodeValue = "Hello Worlld"; // Change the text content of the first child of the body to "Hello World"

console.log(document.body.textContent); // Log the text content of the body

bold.hidden = false; // Set the 'hidden' property of the element with id 'bold' to false, making it visible