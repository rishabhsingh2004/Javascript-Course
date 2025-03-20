console.log("Opertor in JS")

//-------------------Arithmetic Operators----------------
let a=35;
let b=5;
console.log("a + b =" , a +b)
console.log("a - b =", a-b)
console.log("a * b =", a*b)
console.log("a / b =", a/b)
console.log("a ** b =", a**b)
console.log("a % b =", a%b)
console.log("a++ =", a++) // post -increment operator
//console.log("a =", a)
console.log("++a b =", ++a) // Pre-increment opertaor
//console.log("a =", a)
console.log("a-- =", a--)//post-decrement
console.log("--a =", --a) //pre decrement 

//------------------Assignment Operator----------------------
let assignment= 1;
assignment += 5 // same as assignment = assignment + 5
console.log(assignment)

//----------------------Comparison Operator-----------------------
let comp1 = 5;
let comp2 = 7;
console.log("comp1 == comp2 is " , comp1 == comp2)
console.log("comp1 != comp2 is " , comp1 != comp2)
console.log("comp1 === comp2 is " , comp1 === comp2)
console.log("comp1 !== comp2 is " , comp1 !== comp2)
console.log("comp1 > comp2 is " , comp1 > comp2)
console.log("comp1 < comp2 is " , comp1 < comp2)


//-------------------Logical Operator---------------------
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

let and= (false && true && false );
let or  = (true || false|| true);
let not =(!false);
console.log(and , or , not)

console.log(false||"Rishabh") // falsy and truty concerpy by code help love babbbar
console.log(false|| 7)
console.log(false|| 7 || 11 || false || true) // Short circuiting type by code help

//---------Bitwise operator  -----// it means that ye bit me logical operator 0 and 1 ki form me hoga (binary form)


//-------------------Ternary Operator-------------
let age = 19;
console.log( "You", age >=18? "can vote " : "cannot vote" );