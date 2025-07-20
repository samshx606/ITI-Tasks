var nameInput = document.getElementById("nameInput");
var idInput = document.getElementById("idInput");
var ageInput = document.getElementById("ageInput");
var tableBody = document.getElementById("tableBody");
var tableRows = tableBody.getElementsByTagName("tr");
var namePattern = /^[a-zA-Z\s]+$/;

function validateName(name) {
    if(!name){
        alert("Name cannot be empty. Please enter a valid name.");
        return false;
    }else if(!namePattern.test(name)) {
        alert("Invalid name. Please enter a valid name containing only letters and spaces.");
        return false;
    }
    return true;
}

function validateId(id) {
    var idPattern = /^[0-9]+$/;
    if(!id){
        alert("ID cannot be empty. Please enter a valid ID.");
        return false;
    }else if(!idPattern.test(id)) {
        alert("Invalid ID. Please enter a numeric ID.");
        return false;
    }
    for (var i = 0; i < tableRows.length; i++) {
        var rowId = tableRows[i].cells[0].textContent;
        if (rowId === id) {
            alert("ID already exists. Please enter a unique ID.");
            return false;
        }
    }
    return true;
}

function validateAge(age) {
    var agePattern = /^[0-9]+$/;
    if(!age) {
        alert("Age cannot be empty. Please enter a valid age.");
        return false;
    }else if(!agePattern.test(age)) {
        alert("Invalid age. Please enter a numeric age.");
        return false;
    }else if(age < 18 || age > 100) {
        alert("Invalid age. Please enter an age between 18 and 100.");
        return false;
    }
    return true;
}

function addData() {
    var name = nameInput.value;
    var id = idInput.value;
    var age = ageInput.value;

    if (validateId(id) && validateName(name) && validateAge(age)) {
        var newRow = tableBody.insertRow();
        
        var idCell = newRow.insertCell(0);
        var nameCell = newRow.insertCell(1);
        var ageCell = newRow.insertCell(2);
        var actionCell = newRow.insertCell(3);

        idCell.textContent = id;
        nameCell.textContent = name;
        ageCell.textContent = age;
        var deleteButton = document.createElement("button");

        deleteButton.className = "btn-delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            console.log(newRow.rowIndex)
            tableBody.deleteRow(newRow.rowIndex - 1);
        };
        
        actionCell.appendChild(deleteButton);

        nameInput.value = "";
        idInput.value = "";
        ageInput.value = "";
    }
}