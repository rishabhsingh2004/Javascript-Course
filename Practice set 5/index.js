//---Chapter 5 practice set 5---

//---Prcatice problem 1---
 let arr = [1, 2, 3, 4, 5 , 6 ,77];
 let a =9 ;
 a = Number.parseInt(a);
 arr.push(a);
 console.log(arr);
// Output: [1, 2, 3, 4, 5, 6, 77, 9]


//---Prcatice problem 2---
let arr1 = [1, 2, 3, 4, 5, 6, 77];
let b= 0;
do {
    b= Number.parseInt(b);
    arr1.push(b);
}
while (b !== 0);
console.log(arr1);
// Output: [1, 2, 3, 4, 5, 6, 77, 0]

//---Prcatice problem 3---
let arr2 = [10, 2, 3, 40, 5, 6, 70];
 let a2 = arr2.filter((value) => {
    return value %10 === 0
})
console.log(a2);
// Output: [10, 40, 70]

//---Prcatice problem 4---
let arr3 = [10, 2, 3, 40, 5, 6, 70];
let a3 = arr3.map((value)=>{
    return value * value;
})
console.log(a3);
// Output: [100, 4, 9, 1600, 25, 36, 4900]

//---Prcatice problem 5---
let arr4 = [1, 2, 3, 4, 5,];
let a4 = arr4.reduce((a1 , a2)=>{
    return a1 * a2;
})
console.log(a4);