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

a.__proto__ = p //__Proto__ ka use isliye hota hai ki aap kisi object ko dusre object ka prototype(parent) bana sake
a.run()
console.log(a.naam)