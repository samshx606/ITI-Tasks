var tagName = document.getElementById("textBox1")
var className = document.getElementById("textBox2")
var id = document.getElementById("textBox3")
var name_ = document.getElementById("textBox4")
var output = document.getElementById("output")

function calc(){
    var tagVal = tagName.value;
    var classVal = className.value
    var idVal = id.value
    var nameVal = name_.value

    var tagCount = document.getElementsByTagName(tagVal).length;
    var classCount = document.getElementsByClassName(classVal).length;
    var idCheck = document.getElementById(idVal);
    var nameCount = document.getElementsByName(nameVal).length ;

    idCheck = idCheck? true : false

    output.value = 
        tagVal + ": " + tagCount + "    " + 
        classVal + ": " + classCount + "    " + 
        idVal + ": " + idCheck + "    " + 
        nameVal + ": " + nameCount
    
}