 const buttons = document.querySelectorAll('.button')
 //console.log(buttons);
const body =document.querySelector("body");
buttons.forEach((button)=>{
    //console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e) // output = MouseEvent
        console.log(e.target) // output = <button class="button" id
        console.log(e.target.id)// output = id of the button clicked
        if(e.target.id === "red"){
            body.style.backgroundColor = "red";
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = "green";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "blue";
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }if(e.target.id === "purple"){
            body.style.backgroundColor = "purple";
        }
    })


})
