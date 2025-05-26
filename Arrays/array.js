let marks_of_class_12 = [ 58 , 80 , 92 , 78 , null , "Not present "]
console.log(marks_of_class_12)
console.log(marks_of_class_12[0])
console.log(marks_of_class_12[1])
console.log(marks_of_class_12[2])
console.log(marks_of_class_12[3])
console.log(marks_of_class_12[4])
console.log(marks_of_class_12[5])
console.log(marks_of_class_12[6])
console.log("The length of marks of class 12th are ",marks_of_class_12.length)
marks_of_class_12[6] = 89 // Adding a value to the array
marks_of_class_12[7] = 99 // Changing a value of an array



let marks = [ 89 ,90 , 67 , 45 ,60] ;
let i ;
for(i=0 ; i<marks.length; i++){
    console.log(marks[i])
}


// Array methods -----------------------------

let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, num)
console.log(r)

// delete array method --------------------------
let numm = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
let numm_more = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
console.log(numm)
console.log(numm.length)
delete numm[0]
console.log(numm)
console.log(numm.length)
// Concat array method------------
let newArray = numm.concat(numm_more)
console.log(newArray)
console.log( numm , numm_more)   

// Sort array method------------
let compare =(a , b)=>{
 //return a-b  // for asscending
return b -a // for desceding
}
let Num = [551 , 783 , 32 , 1 , 98, 2000]
Num.sort(compare)
//Num.reverse()
console.log(Num)


// Splice and Slice -----------------------
let deletedvalues = Num.splice(2 , 3 , 1021 , 1036 , 7856 ,6516)
console.log(deletedvalues)
console.log(Num)

let newNum = Num.slice( 3,6)
console.log(newNum)