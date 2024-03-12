const notesContainer = document.querySelector(".notesBox");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputArea");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputArea = document.createElement("p");
    let img = document.createElement("img");
    inputArea.className = "inputBox";
    inputArea.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputArea).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
