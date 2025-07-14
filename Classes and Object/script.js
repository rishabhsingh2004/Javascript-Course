class Railwayform {
    submit(){
        alert(this.name +" : Your Form is SUBMIT of train no. = "  + this.trainNum)
    }
    cancel(){
        alert( this.name + " : Your form is CANCELLED of train no. = "  + this.trainNum)
    }
    fill(givenName , trainNum){
        this.name = givenName
        this.trainNum= trainNum
    }
}

let rishabhForm = new Railwayform()
rishabhForm.fill("Rishabh" , 537545)
let rahulForm1 = new Railwayform()
let rahulForm2 = new Railwayform()
rahulForm1.fill("Rahul" , 234857)
rahulForm2.fill("Rahul" , 651919)

rishabhForm.submit()
rahulForm1.cancel()
rahulForm1.submit()
rahulForm2.submit()