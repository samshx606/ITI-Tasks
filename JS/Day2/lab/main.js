// ---- lab 1 ------------------------------------------------------------------------------------------------------------


// function searchByletter(str, c){
//     var arr = [];
//     for(var i=0; i<str.length; i++){
//         if(str[i] == c)
//             arr.push(i);
//     }
//     return arr;
// }
// console.log(searchByletter("This is javaScript", "i"))




// ---- lab 2 --------


// function print (num){
//     if(num%3 == 0 && num%5 == 0){
//         console.log("fizz buzz")
//     }else if(num%3 == 0){
//         console.log("fizz")
//     }else if(num%5 == 0){
//         console.log("buzz")
//     }else{
//         console.log("none")
//     }
// }
// print(10)




// ---- lab 3 ------------------------------------------------------------------------------------------------------------


// function sum(arr){
//     var ans = 0
//     for(var i=0; i<arr.length; i++){
//         ans += arr[i];
//     }
//     return ans;
// }
// function multiplication(arr){
//     var ans = 1
//     for(var i=0; i<arr.length; i++){
//         ans *= arr[i];
//     }
//     return ans;
// }
// function division(arr){
//     if(arr == undefined)
//         return undefined

//     var ans = arr[0]
//     for(var i=1; i<arr.length; i++){
//         if(!arr[i])
//             return undefined;
//         ans /= arr[i];
//     }
//     return ans;
// }

// var arr = []
// for(var i=0; i<3; i++){
//     var num = Number(prompt("Please enter a number"))
//     arr.push(num)
// }

// console.log("sum of " + arr[0] + "+" + arr[1] + "+" + arr[2] + " = " + sum(arr));
// console.log("multiplication of " + arr[0] + "*" + arr[1] + "*" + arr[2] + " = " + multiplication(arr));
// console.log("division of " + arr[0] + "/" + arr[1] + "/" + arr[2] + " = " + division(arr));



// ---- lab 4 ------------------------------------------------------------------------------------------------------------


function ASC(a, b){
    return a - b;
}
function DESC(a, b){
    return b - a;
}

var arr = [12, 3, 105, 91, 19, 38];
console.log("Befor sorting: " + arr);

arr.sort(ASC);
console.log("ASC sort: " + arr);

arr.sort(DESC);
console.log("DESC sort: " + arr);
