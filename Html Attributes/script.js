let first = document.getElementById("first"); // Get the first element with id 'first'
let a = first.getAttribute("class"); // Get the value of the 'class' attribute of the first element with id 'first'
console.log(a); // Log the value of the 'class' attribute to the console

console.log(first.hasAttribute("class")); // Check if the first element with id 'first' has a 'class' attribute and log the result
console.log(first.hasAttribute("style")); // Check if the first element with id 'first' has any attributes and log the result
//first.setAttribute("hidden", "true"); // Set the 'hidden' attribute of the first element with id 'first' to true, hiding it
//first.setAttribute("class", "new-class"); // Set the 'class' attribute of the first element with id 'first' to "new-class"
first.removeAttribute("class"); // Remove the 'class' attribute from the first element with id 'first'
console.log(first.attributes); // Log all attributes of the first element with id 'first' to the console

console.log(first.dataset); // Log the dataset of the first element with id 'first' to the console
console.log(first.dataset.game); // Log the value of the 'game' data attribute of the first element with id 'first' to the console
console.log(first.dataset.player); // Log the value of the 'player' data attribute of the first element with id 'first' to the console