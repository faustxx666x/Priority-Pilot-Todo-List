const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

console.log(listContainer)

document.getElementById("add-btn").addEventListener("click", addTask)
addEventListener("keydown", (e) => {    
    if(e.key == "enter") {
        addTask()
    }
})

function addTask(){
    if(inputBox.value == "") {
        alert("Tangina mo wag mong iwang blangko tanga")} 
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        let span = document.createElement("span")
        span.innerHTML = "<i class='fa-solid fa-trash'></i>"
        li.appendChild(span)
        listContainer.appendChild(li)
    } 

    inputBox.value = "";
    savedata()
}

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked")
        savedata() }
    else if(e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
})

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()