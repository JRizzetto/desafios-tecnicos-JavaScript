/*
Exercise 3 — Separate Even and Odd Numbers
🧩 Problem:
Create a function called separateEvenOdd() that receives an array of numbers and returns an object with two properties:
evens: an array containing all even numbers
odds: an array containing all odd numbers

You must build both arrays manually using a loop — no array methods like filter() yet.
*/

function separateEvenOdd(numberArray = []) {
  const separatedNumbers = {
    evens: [],
    odds: [],
  };

  for (const number of numberArray) {
    if (number % 2 === 0) {
      separatedNumbers.evens.push(number);
    } else {
      separatedNumbers.odds.push(number);
    }
  }

  return separatedNumbers;
}

console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));
// ➞ { evens: [2, 4, 6], odds: [1, 3, 5] }
console.log(separateEvenOdd([10, 15, 20, 25]));
// ➞ { evens: [10, 20], odds: [15, 25] }
console.log(separateEvenOdd([]));
// ➞ { evens: [], odds: [] }

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
