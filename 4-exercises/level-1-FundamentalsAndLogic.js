/*
🟢 Exercise 5 — Filtering and Transforming Data
🧩 Problem:
Create a function called doublePositiveNumbers() that receives an array of numbers and returns 
a new array containing only the positive numbers, but each one doubled.
You must:
Use filter() to keep only positive numbers.
Use map() to double each of them.
Not modify the original array.
*/

function doublePositiveNumbers(numbers = []) {
  const filterNumbers = numbers.filter((number) => number > 0);
  return filterNumbers.map((number) => number * 2);
}
console.log(doublePositiveNumbers([2, -5, 10, -3, 0, 8]));
console.log(doublePositiveNumbers([-1, -2, -3]));
console.log(doublePositiveNumbers([5, 15]));

console.log("--------------------------------------------");

const doublePNumbers = (numbers = []) =>
  numbers.filter((number) => number > 0).map((number) => number * 2);

console.log(doublePNumbers([2, -5, 10, -3, 0, 8]));
console.log(doublePNumbers([-1, -2, -3]));
console.log(doublePNumbers([5, 15]));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 4 — Filtering Numbers
🧩 Problem:
Create a function called getPositiveNumbers() that receives an array of numbers and returns a 
new array containing only the positive numbers (greater than zero).

You must use the filter() method — no loops allowed this time.
*/

// function getPositiveNumbers(arrayNumbers = []) {
//   return arrayNumbers.filter((number) => number > 0);
// }

// console.log(getPositiveNumbers([2, -5, 10, -3, 0, 8]));
// console.log(getPositiveNumbers([-1, -2, -3]));
// console.log(getPositiveNumbers([5, 15, 25]));

// console.log('--------------------------------------------')

// const getPositiveArrowFunction = (numbers = []) =>
//   numbers.filter((number) => number > 0);

// console.log(getPositiveArrowFunction([2, -5, 10, -3, 0, 8]));
// console.log(getPositiveArrowFunction([-1, -2, -3]));
// console.log(getPositiveArrowFunction([5, 15, 25]));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 3 — Separate Even and Odd Numbers
🧩 Problem:
Create a function called separateEvenOdd() that receives an array of numbers and returns an object with two properties:
evens: an array containing all even numbers
odds: an array containing all odd numbers

You must build both arrays manually using a loop — no array methods like filter() yet.
*/

// function separateEvenOdd(numberArray = []) {
//   const separatedNumbers = {
//     evens: [],
//     odds: [],
//   };

//   for (const number of numberArray) {
//     if (number % 2 === 0) {
//       separatedNumbers.evens.push(number);
//     } else {
//       separatedNumbers.odds.push(number);
//     }
//   }

//   return separatedNumbers;
// }

// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));
// // ➞ { evens: [2, 4, 6], odds: [1, 3, 5] }
// console.log(separateEvenOdd([10, 15, 20, 25]));
// // ➞ { evens: [10, 20], odds: [15, 25] }
// console.log(separateEvenOdd([]));
// // ➞ { evens: [], odds: [] }

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 2 — Counting Even Numbers in an Array
🧩 Problem:
Create a function called countEvens() that receives an array of numbers and returns how many of them are even.

You must:

Use a loop (for, while, or for...of — your choice)
Not use array methods like filter() or reduce() yet (we’ll get there later 😉)
*/

// function countEvens(numberArray = []) {
//   let countEven = 0;

//   for (const number of numberArray) {
//     if (number % 2 === 0) {
//       countEven++;
//     }
//   }

//   console.log(countEven);
//   return countEven;
// }

// countEvens([2, 5, 8, 11, 14]);
// countEvens([1, 3, 5, 7]);
// countEvens([0, 10, 20, 30]);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 1 — Function & Basic Logic
🧩 Problem:
Create a function called isEven() that takes one number as a parameter and returns:
- "Even" if the number is even
- "Odd" if the number is odd

You must not use any external libraries — only basic JavaScript operations.
*/

// function isEven(number = 0) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }
// console.log(isEven(2));

// // Shortened version

// const isEvenShort = (number = 0) => (number % 2 === 0 ? "Even" : "Odd");
// console.log(isEvenShort(1));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
