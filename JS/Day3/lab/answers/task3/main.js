var textBox = document.getElementById("textBox")
var red = document.getElementById("red")
var yellow = document.getElementById("yellow")
var green = document.getElementById("green")

function changeColor(){
    var value = Number(textBox.value)
    if(isNaN(value) || value>3 || value<1){
        textBox.value = ""
        textBox.placeholder = "Wrong!.. Please Enter a valid number between 1 and 3"
        return;
    }
    red.style.backgroundColor = "rgb(114, 134, 139)";
    yellow.style.backgroundColor ="rgb(114, 134, 139)";
    green.style.backgroundColor = "rgb(114, 134, 139)";
    if(value == 1){
        red.style.backgroundColor = "red";
    }else if(value == 2){
        yellow.style.backgroundColor = "yellow";
    }else{
        green.style.backgroundColor = "green";
    }
}
