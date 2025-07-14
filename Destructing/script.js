let arr = [3 , 5 ,8 , 10 , 14, 20];

//  NO need to do this:
// let a = arr[0];
// let b = arr[1];
//let [a ,b, c, ...rest ] = arr;
//console.log(a, b, c,...rest); // Output: 3 5 8 10 14 20
//let [a, , , ...rest] = arr; // Skipping elements
//console.log(a, ...rest); // Output: 3 10 14 20
let {a, b} ={a: 1, b: 2}; // Destructuring from an object
console.log(a, b); // Output: 1 2

//Spread operator
let arr1 = [3, 5, 8];
let obj1 = {...arr1} // Converts array to object
console.log(obj1); // Output: { '0': 3, '1': 5, '2': 8 }

function sum (v1 ,v2, v3) {
    return v1 + v2 + v3;
}
console.log(sum(...arr1)); // Using spread operator to pass array elements as arguments

let obj ={
    name : "John",
    company : "Tech",
    address : "123 Tech St"
}

console.log({...obj , name: "Doe"}); // Output: { name: 'Doe', company: 'Tech', address: '123 Tech St' }