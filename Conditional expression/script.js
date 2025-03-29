//-------------------Code With Harry---------(Works on an runtime browser)

// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a); // Converting the string to a number
// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// // HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))

//-----------------Code help----------

let number= 4;
let age = 45;
if (number==1){
    console.log("A");
}
else if (number==2){
    console.log("B");
}
else if (number==3){
    console.log("C");
}
else if (number==4){
    if(age>=18){
    console.log("I can Vote !");
}
    console.log("D");
}
else if (number==5){
    console.log("E");
}
else{
    console.log("F")
}

//------------Switch statement------------
let num =3 
switch(num){
    case 1 : console.log("Aa")
    break;
    case 2 : console.log("Bb")
    break;
    case 3 : console.log("Cc")
    break;
    case 4 : console.log("Dd")
    break;
    default: console.log("Ff")
}