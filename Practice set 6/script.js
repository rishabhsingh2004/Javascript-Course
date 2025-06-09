// //----------Problem 1 and 2 and 3---------
// let runAgain = true; // Variable to control the loop

// while (runAgain) {
//     let age = prompt("Enter your age:");
// age = Number.parseInt(age);// Convert the input to a number
// if(age < 0){
//     console.error("Please enter a valid age"); // Log an error if the age is negative //problem 3
// }
// if (age >=18 ){
//     alert("Yes , you can drive");
// }
// else{
//     alert("No, you cannot drive");
// }
// runAgain = confirm("Do you want to run the program again?"); // Ask the user if they want to run the program again // probllem 2
// }

//------Problem 4 and 5------
let number = prompt("Enter a number ")
number = Number.parseInt(number); // Convert the input to a number

if (number> 4){
    location.href = "https://www.google.com"; // Redirect to Google if the number is greater than 4 // problem 4
}

let color = prompt("Enter the page background color ");
document.body.style.backgroundColor = color; // Change the background color of the page to the entered color  //problem 5