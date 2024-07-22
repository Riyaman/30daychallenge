// Activity 1: Selecting and Manipulating Elements
// Task 1 Select an HTML element by its ID and change its text content
const weEl = document.getElementById("we-el")
const heading = document.querySelector(".heading")
const bodyEl = document.getElementsByTagName("body")
const ulEl = document.getElementById("ul-el")
weEl.textContent = "Complete all challenges"
// Task 2 Select an HTML element by its Class and change its background color
heading.style.color = "#ff0000";
// Task 3 Create a new div element with some text content and append it to the body. 
bodyEl.innerHTML += "<div>" + "Its is New Div" + "</div>"
// Task 4 create a new li element and add it to an existing ul list.
ulEl.innerHTML = "<li>" + "Task 4 Creating li tag & adding existing ul" + "</li>"
// Task 5 select an HTML element and remove it from the DOM.
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element";
const body = document.body;
// Task 6 Remove the last child of specifice HTML element.
// Select an html element and remove it from the dom
const elementToRemove = document.getElementById('myElement');
elementToRemove.remove();
const box = document.getElementById("box")
box.lastChild.remove()