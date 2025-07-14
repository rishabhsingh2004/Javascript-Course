class Animal {
    constructor(name , color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is barking")
    }
    
}

class Monkey extends Animal {
    eatbanana(){
        console.log(this.name + " is eating banna")
    }
}

let ani = new Animal("Bruno", "White")
let m = new Monkey("Bandar" ,"Brown")

ani.run()
ani.shout()
m.eatbanana()