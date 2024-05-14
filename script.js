const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
//a <p> with red text that says “Hey I’m red!”
const red = document.createElement("p")
red.textContent = "Hey I’m red!"
red.style.cssText = "color: red; background: white;"
container.append(red);

//an <h3> with blue text that says “I’m a blue h3!”

const blue = document.createElement("h3")
blue.textContent = "I’m a blue h3!"
blue.style.cssText = "color: blue"
container.append(blue)

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const black = document.createElement("div")
black.setAttribute("style", "background: pink;")
black.style.border = "thick solid black";
container.append(black)
const hi = document.createElement("h1")
hi.textContent = "I'm in a div"
const me = document.createElement("p")
me.textContent = "ME TOO!"
black.append(hi, me)
