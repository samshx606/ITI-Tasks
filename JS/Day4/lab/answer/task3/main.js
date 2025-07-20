h = document.getElementById("h")
icon = document.getElementById("icon")
p = document.getElementById("pp")
mark = document.getElementById("mark")
function correct(){
    h.textContent = "Success"
    icon.className  = "fa-solid fa-check green"
    p.textContent  = "This is a Success Messege"
    mark.className = "green"
    mark.style.backgroundColor = "azure"
}

function wrong(){
    h.textContent = "Wrong"
    icon.className  = "fa-regular fa-circle-xmark"
    p.textContent  = "This is an Error Messege"
    mark.className = "red"
    mark.style.backgroundColor = "azure"
}