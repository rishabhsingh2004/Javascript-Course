// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name" , "Rishabh")
// sessionStorage.removeItem("name")

window.onstorage = (e)=>{
    alert("Changed")
    console.log(e)
}