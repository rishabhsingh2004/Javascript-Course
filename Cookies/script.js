console.log(document.cookie)
document.cookie = "name=Krishna .....1122334400"
document.cookie = "name2=Rishabh.....11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)