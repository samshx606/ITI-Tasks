function convert(){
    var input = document.getElementById("input").value
    document.getElementById("output").value = input[0].toUpperCase() + input.slice(1).toLowerCase()
    
}