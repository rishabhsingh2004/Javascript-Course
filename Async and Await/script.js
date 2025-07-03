async function weather() {
    
delhiWeather = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("27 deg")
  },3000)  
})
let bangloreWeather = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("26 deg")
  },6000)  
})
let jaipurWeather = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("20 deg")
  },9000)  
})

// delhiWeather.then(alert)
// bangloreWeather.then(alert)
console.log("Fetching Delhi Weather please wait .....") 
let delhiW = await delhiWeather
console.log("Fetched Delhi weather :" + delhiW)
console.log("Fetching Banglore Weather please wait .....")
let BangloreW =await bangloreWeather
console.log("Fetched Banglore weather :" + BangloreW)
console.log("Fetching Jaipur Weather please wait .....")
let jaipureW =await jaipurWeatherWeather
console.log("Fetched Jaipur weather :" + jaipureW)
return

}

console.log("Welcome to the weather control room")
let a = weather()
a.then((result)=>{
    console.log(result)
})