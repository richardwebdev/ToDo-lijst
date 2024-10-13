let items = [];

const itemsDiv = document.getElementById('itemsList')
const input = document.getElementById('ItemInput')
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [index, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const removebutton = document.createElement("button")
        removebutton.textContent = "delete"
        removebutton.style.borderRadius = "30px"
        removebutton.onclick = () => removeItems(index)

        container.appendChild(text)
        container.appendChild(removebutton)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems) 
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function AddItem() {
    const value = input.value;
    if (!value) {
        alert("je kunt geen leeg element toevoegen")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItems(index) {
    items.splice(index, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)
