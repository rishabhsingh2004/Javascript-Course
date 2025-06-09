let user = prompt("R , P and S" )// Prompt the user to enter their choice // Rock, Paper, or Scissors
let cpu1 = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
let cpu = ['R', 'P', 'S'][cpu1]; // Map the random number to  Rock, Paper, or Scissors
const match =(cpu ,user)=>{
    if (user === cpu ){
        return"Nobody wins";
    }
    else if ( cpu === "S" && user ==="R"){
        return "User wins";  } // Rock crushes Scissors //return the result of the match
        else if ( cpu === "S" && user ==="P"){
        return "CPU wins"; // Scissors cuts Paper
        }
        else if(cpu === "R" && user ==="S"){
            return "CPU wins" //rock crushes Scissors
        }
        else if (cpu==="R"&& user ==="P"){
            return "User Wins" // Paper covers Rock
        }
        else if (cpu === "P" && user === "R"){
            return "CPU wins" // Paper covers Rock
        }
        else if (cpu === "P" && user === "S"){
            return "User wins" // Scissors cuts Paper
    }
}
let result =match (user, cpu) 
document.write("CPU choice: " + cpu + "<br>"); // Display the CPU's choice
document.write("User choice: " + user + "<br>"); // Display the user's choice
document.write("Result: " + result); // Display the result of the match