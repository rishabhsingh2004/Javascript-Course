class Animal {
    constructor(name){
        this._name = name;
    }
    fly(){
         console.log("Are bhai tu itna ucha mat udh wrna gir jayega")
    }
    get name(){
        return this._name; // ye underscrore name isliye use kiya  kyuki name already ek property hai
    }
    set name(newName){
        this._name = newName; // setter method ko use kiya
    }
}
class Rabbit extends Animal{
    eat(name){
        console.log("Rabbit is eating carrots");
    }
}
// let a = new Animal("Dog");
let a = new Rabbit("Bruno")
a.fly()
console.log(a.name) // getter method ko call kiya
a.name = "Tommy"; // setter method ko call kiya
console.log(a.name) // getter method ko call kiya
let c = 45

console.log(a instanceof Animal) // ye check karega ki a object Animal class ka instance hai ya nahi
console.log(c instanceof Animal) 
console.log(a instanceof Rabbit) // ye check karega ki a object Rabbit class ka instance
 