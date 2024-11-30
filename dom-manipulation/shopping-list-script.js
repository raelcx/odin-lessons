const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem(item) {
    input.value = '';
    let itemToAdd = item;
    let itemToRemove = item;
    
    const li = document.createElement("li");

    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    li.appendChild(span);
    li.appendChild(deleteButton);

    span.textContent = itemToAdd;
    deleteButton.textContent = "Delete";

    ul.appendChild(li);

    deleteButton.addEventListener("click", () => {
        event.target.closest("li").remove();
    })

    input.focus();
}

const btnAddItem = document.querySelector("#btnAddItem");
btnAddItem.addEventListener("click", () => addItem(input.value));

