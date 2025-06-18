 document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"; // getelementsByTagName returns a collection of all the elements with the specified tag name, in this case, "nav". We access the first element of that collection and then access its first child element to change its style color to red.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.backgroundColor = "cyan"; // This will change the background color of all the list items in the navigation bar to cyan.
})