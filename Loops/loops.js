//--------------For Loop--------------
for( let i=0 ; i<5 ; i++) {
    console.log(i)
}

// Program to find the sum of n natural no. with the help of "for loops"
let sum = 0
let n =3
for ( let i =0 ; i<n ; i++){
    sum = sum + (i+1) ;
    // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural number is " + sum)


// let sub =0
// let m =4
// for( let i =0 ; i <m ; i++){
//     sub = sub - (i) 
//     console.log((i) + "-")
// }
// console.log("Sum of first " + m + " natural number is " + sub)


//-------------------For-in Loops-------------
let marks ={
    rishabh : 90 ,
    rahul : 79 ,
    abhi : 45,
    akshita :89,
    ashish:45
}
for (let a in marks){
    console.log("Marks of " + a + " are " + marks[a])
}

// -----------------------For-of Loops-----------------
for(let b of "Rishabh"){
    console.log(b)
}

//-------------------While Loops --------------------
 let a = 7;
 let i =0;
 while(i<a){
    console.log(i)
    i++
 }


//----------do while loops -------------
 let b = 9;
 let j =0;
 do {
     console.log(j);
     j++;
 }while(j<b)

// let b = 2 ;
// let j = 10;
// do{
//     console.log(j);
//     j++
// }while(j<b)