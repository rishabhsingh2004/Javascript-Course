class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name);
    }
    walk() {
        console.log(this.name + "is walking")
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}
 let a = new Animal("dog ");
 a.walk();