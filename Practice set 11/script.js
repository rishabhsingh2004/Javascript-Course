class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num){
        this.real += num.real;
        this.imaginary += num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(newReal) {
        this._real = newReal;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
}

let a = new Complex(2, 3);
a.real = 4; // Using setter
a.imaginary = 5; // Using setter
let b = new Complex(4, 5);
a.add(b);
console.log(`Real: ${a.real}, Imaginary: ${a.imaginary}`); // Output: Real: 6, Imaginary: 8
console.log(`${a.real} + ${a.imaginary}i`); // Output: 6 + 8i

// class Human {
//     constructor(name, age) {
//         this.name = name
//         this.age=age
//     }
//     walk(){
//         console.log(this.name + " : Human is walking")
//     }
// }
//  class Student extends Human {
//     walk(){
//         console.log(this.name + " : Student is walking")
//     }
//  }

//  let o =  new Human("Rishabh", 20);
//  let s = new Student("Rishi", 18);
//  o.walk(); 
// s.walk(); 
