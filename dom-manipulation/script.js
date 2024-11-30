const container = document.querySelector("#container");

const p = document.createElement("p");
p.classList.add("paragraph");
p.textContent = "Hey I’m red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.classList.add("div1");
div.style["background-color"] = "pink";
div.style["border"] = "3px solid black";

const h1 = document.createElement("h1");
h1.style["color"] = "black";
h1.textContent = "I'm in a div!"

const secondP = document.createElement("p");
secondP.style["color"] = "black";
secondP.textContent = "ME TOO!"

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

const div1 = document.querySelector(".div1");

div1.appendChild(h1);
div1.appendChild(secondP);


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Hello World");
});