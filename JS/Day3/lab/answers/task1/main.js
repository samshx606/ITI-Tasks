var input = document.getElementById("array")
function processArray() {
    input = input.value
    var temp = input.split(",")
    var arr = []
    for(var i=0; i<temp.length; i++){
        var num = Number(temp[i]);
        if(!isNaN(num))
            arr.push(num);
    }
    console.log(arr)
    if(arr.length == 0){
        alert("Please enter a valid number")
    }
    var max = Math.max.apply(null,arr)
    var min = Math.min.apply(null,arr)
    document.getElementById("max").value = max;
    document.getElementById("min").value = min;
}