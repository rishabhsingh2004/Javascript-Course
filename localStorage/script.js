let key = prompt("Enter the key you want to set")
let value = prompt("Enter the value you want to set")

localStorage.setItem(key , value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
if( key == "red" || key == "blue"){
    localStorage.removeItem(key)
}
if (key == 0 ){
    localStorage.clear()
}