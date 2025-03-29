let name = "Rishabh"
// console.log(name.length)
console.log(name[0])
console.log(name[1])
let friend = 'Prakash'
console.log(friend)
// let myfriend = "Shubh' // Dont do this
 //console.log(myfriend)

// -------Template literals

let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`//  " ```` "<-- This is a sign call bactick
console.log(sentence)

//-------- Escape Sequence Characters

// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = "Bana\"na"
console.log(fruit)

//------Some string properties and methods------
let Name = "Rishabh" ;
let dost = "Rahul" ;
let dost2 ="             Akshita            "
console.log(Name.length)
console.log(Name.toLowerCase())
console.log(Name.toUpperCase())
console.log(Name.toLocaleLowerCase())
console.log(Name.toLocaleUpperCase())
console.log(Name.slice(2,5))
console.log(Name.slice(1))
console.log(Name.replace("Ris" , "His"))
console.log(Name.concat( " is a Friend of " , dost))
console.log(dost2.trim())