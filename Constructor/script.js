class Railwayform {
    constructor( givenName , trainNum){
        console.log("Constructor called ..." + givenName +" "+ trainNum)
        this.name = givenName
        this.trainNum =trainNum
    }
    submit(){
        alert(this.name +" : Your Form is SUBMIT of train no. = "  + this.trainNum)
    }
    cancel(){
        alert( this.name + " : Your form is CANCELLED of train no. = "  + this.trainNum)
    }
    
}

let rishabhForm = new Railwayform("Rishabh" , 537545)

let rahulForm1 = new Railwayform("Rahul" , 234857)
let rahulForm2 = new Railwayform("Rahul" , 545654)


rishabhForm.submit()
rahulForm1.cancel()
rahulForm1.submit()
rahulForm2.submit()