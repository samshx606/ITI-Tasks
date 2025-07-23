// task 1

// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);




// task 2

// function getMinMax(...numbers) {
//     let min = Math.min(...numbers);
//     let max = Math.max(...numbers);
//     return { min, max };
// }

// const result = getMinMax(5, 2, 9, 1, 7, 4);
// console.log(result.min);
// console.log(result.max);



// task 3

// let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// const isAllStrings = fruits.every(fruit => typeof fruit === 'string');
// console.log(isAllStrings ? "All elements are strings" : "Not all elements are strings");

// const isSomeStartsWithA = fruits.some(fruit => fruit.startsWith('a'));
// console.log(isSomeStartsWithA ? "At least one element starts with 'a'" : "No elements start with 'a'");

// const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
// console.log(filteredFruits);

// const likedFruits = fruits.map(fruit => `I like ${fruit}`);
// console.log(likedFruits);

// likedFruits.forEach(sentence => {
//     console.log(sentence);
// });



// task 4

// let getPositiveNumbers = numbers => numbers.filter(num => num > 0);
// console.log(getPositiveNumbers([-1, 2, -3, 4, 5, -6]));



// task 5

// const sumNumbers = numbers => numbers.reduce((sum, num) => sum + num, 0);
// console.log(sumNumbers([1, 2, 3, 4]));



// task 6
// var capitalizedNames = names => names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// console.log(capitalizedNames(["john", "jAne", "doE"]));



// task 7
// var isLowerCase = str => str === str.toLowerCase();
// console.log(isLowerCase("hello"));
// console.log(isLowerCase("Hello"));



//task 8

// var stringsGreaterThan = (arr, length) => arr.filter(str => str.length > length);
// console.log(stringsGreaterThan(["ahmed", "mohamed", "ali", "sayed"], 4));
