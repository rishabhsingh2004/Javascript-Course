let a = document.getElementsByTagName("div")[0];// Get the first <section> element in the document
//a.innerHTML = a.innerHTML + "<h1>Hello World !</h1>"; // Append an <h1> element with "Hello World !" to the inner HTML of the first <section> element

// let b = document.createElement("h1"); // Create a new <h1> element
// b.innerHTML = "Hello World !"; // Set the inner HTML of the new <h1> element to "Hello World !"
// a.appendChild(b); // Append the new <h1> element to the first <section> element

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
 a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);