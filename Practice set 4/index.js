//Problem 1----------

let a = "Ris\"";
console.log(a.length)

//Problem 2-----------------

const sentance = "The quick brown fox jumps over the lazy dog .";
const word = "fox";
console.log(sentance.includes(word))
console.log(`The word "${word}" ${sentance.includes(word) ? " is " : " is not "} in the sentance `);

//Problem 3------------

let b = "Rishabh";
console.log(b.toLowerCase())

//Problem 4------------
let str = "Please give me RS 1000";
let amount = Number.parseInt(str.slice("Please give me RS ".length)) 
//let amount = (str.slice(18))
console.log(amount)
console.log(typeof amount)

//Problem 5 -------
let c = "Rishabh"
c[2] = "a"
console.log(c)
console.log(c.replace("i" , "a"));