let num =[ 3 ,20 , 1  , 5 ]
// for(
//     let i=0; i<num.length; i++){
//         console.log(num[i])
//     }

// -----------------ForEach Loop-------------------

num.forEach((element)=>{
    console.log(element*element);
})

// -----------------Array.From-------------------
let name = "Hello";
let arr = Array.from(name);
console.log(arr); 

//-------------for of loop-------------------
for(let i of num){
    console.log(i);
}

// -----------------for in loop-------------------
for(let i in num){
    console.log(num[i]);
}

//----------------- Array Map() Method-----------------
let arr1 = [1, 2 , 3, 4, 5];
let a = arr1.map((value , index , array) => {
    console.log(value ,index , array);
    return value + 1
})
console.log(a);

//----------------- Array Filter() Method-----------------
let arr2 = [45 , 54 , 67 , 0 , 3, 5];
let b = arr2.filter((value) => {
    return value < 10
})
console.log(b);

//----------------- Array Reduce() Method-----------------
let arr3 = [1, 2, 3, 4, 5];
let c = arr3.reduce((h1 , h2)=>{
    return h1 +h2 
})
console.log(c);