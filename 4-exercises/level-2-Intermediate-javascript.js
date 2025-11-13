/*
🟡 Exercise 7 — Counting and Grouping Elements with reduce()
🧩 Problem
- Create a function called countOccurrences() that receives an array of strings and returns 
an object showing how many times each string appears.
- You must use only reduce() — no loops or other array methods.
*/

function countOccurrences(strings = []) {
  return strings.reduce((acc, string) => {
    acc[string] = (acc[string] || 0) + 1;
    return acc;
  }, {});
}

console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);
// ➞ { apple: 3, banana: 2, orange: 1 }

console.log(countOccurrences(["car", "bike", "car", "car", "bus"]));
// ➞ { car: 3, bike: 1, bus: 1 }

console.log(countOccurrences([]));
// ➞ {}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 6 — Summing Numbers with reduce()
🧩 Problem:
Create a function called sumNumbers() that receives an array of numbers and returns the total 
sum using only reduce() (no loops or other array methods).
*/

// function sumNumbers(numbers = []) {
//   return numbers.reduce((acc, number) => (acc += number), 0);
// }

// console.log(sumNumbers([1, 2, 3, 4]));
// console.log(sumNumbers([10, -5, 15]));
// console.log(sumNumbers([]));

// console.log("-------------------------------------------------------");

// const sumNumbersArrow = (numbers = []) =>
//   numbers.reduce((acc, number) => (acc += number), 0);

// console.log(sumNumbersArrow([1, 2, 3, 4]));
// console.log(sumNumbersArrow([10, -5, 15]));
// console.log(sumNumbersArrow([]));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
