// Method Overriding -------

class employee {
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
    requestCoffee(x){
        console.log("Programmer has requested " + x + " coffee ")
    }
    requestLeave(leave){
        super.requestLeave(3) // Calling the parent class method;
        console.log("One extra leave is granted ")
    }
}
let e = new employee();
// e.login()
// e.logout()
// e.requestLeave(2)
let p =new Programmer()
p.login()
p.requestCoffee(3)
p.requestLeave(2)