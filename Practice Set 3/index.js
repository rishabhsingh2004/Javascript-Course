let marks = {
    rishabh : 90,
    akshita :89,
    rahul:56,
    abhi : 44
}

//--Problem no. 1
 
for(let i=0; i<Object.keys(marks).length ; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]] )
}

//--Problem no. 2

for(let key in marks){
    console.log("The marks of " + key+ " are " + marks[key] )
}

//---Problem no. 3
// let correctnumber = 4
// let i 
// while( i !=correctnumber){
//     console.log("Try Again")
//     i=prompt("Enter a number")// promt is not working on vs code this code will work on browser
// }
// console.log("You have entered a correct number")


//----Problem no. 4
const mean =(a , b , c, d )=> {
    return ( a +b + c +d)/4
}
console.log("The value of mean is "+ mean(5, 6, 7, 8))