
//---------------Functions---------------

const hello = () =>{
    console.log(" Hey how are you? ")
    return "HI"
}

let a = 1;
let b = 2;
let c = 3;
let d = hello()

function average(x, y){
   // console.log("Done")
    return Math.round( 1 + ( x + y )/2)
  
} 
 
const sum = (p ,q )=>{
    return p+q
}



console.log(d)
console.log( "One plus average of a and b " , average(a,b))
console.log( "One plus average of b and c " , average(b,c))
console.log( "One plus average of a and c " , average(a,c))
console.log(sum(9,7))