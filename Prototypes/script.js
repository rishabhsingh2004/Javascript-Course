let a ={
    name : "Rishabh",
    language : "Javascript",
    run: ()=>{
        alert("Self Run")
    }
}
console.log(a)

let p = {
    run :()=>{
        alert("run")
    }
}

p.__proto__ ={
    naam : "Mohit"
}

a.__proto__ = p
a.run()
console.log(a.naam)