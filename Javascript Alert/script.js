alert("Enter the name of person");
let name = prompt("Enter your name")
//document.write( "Hello "+ name + "<br> Welcome to the JavaScript world!</br>");
let write = confirm("Do you want to write your name in the document?");
if(write){
    document.write(name)
}
else{
    document.write("Please allow me to write your name in the document")
}