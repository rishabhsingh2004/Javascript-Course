// Overriding Constructor-------

class employee {
    constructor(name){
        console.log( name + " - New Employee constructor called")
        this.name = name;
    }
    login(){
        console.log("Employee has logged in ")
    }
    logout(){
        console.log("Employee has logged out ")
    }

    requestLeave(leave){
        console.log("Employee has requested " + leave +" leaves - Auto approved ")
    }
}

class Programmer extends employee {
    constructor(name){
        super(name); 
        console.log(name + " - Programmer constructor called");
        this.name = name;
    }
    // constructor(name, language){
    //     super(name); // Calling the parent class constructor . Agr yha nhi bhi likhoge to js will automatically call the parent class constructor
    requestCoffee(x){
        console.log("Programmer has requested " + x + " coffee ")
    }
    requestLeave(leave){
        super.requestLeave(3) // Calling the parent class method;
        console.log("One extra leave is granted ")
    }
}
let e = new employee("Rishabh");
// e.login()
// e.logout()
// e.requestLeave(2)
let p =new Programmer("Rishabh")
p.login()
p.requestCoffee(3)
p.requestLeave(2)