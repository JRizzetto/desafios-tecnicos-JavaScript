/*
Exercise 9 — Working With Arrays of Objects (filter + map + reduce)
You will receive an array of products, each with:
- name (string)
- price (number)
- category (string)

🔹 Your task:
Create a function calculateCategoryTotal(products, category) that:
1 - Filters only the products matching the given category
2 - Maps the filtered items to extract their price
3 - Reduces to get the sum of all prices of that category
*/

const items = [
  { name: "Laptop", price: 3000, category: "electronics" },
  { name: "Mouse", price: 100, category: "electronics" },
  { name: "Shirt", price: 80, category: "clothes" },
  { name: "Headset", price: 200, category: "electronics" },
  { name: "Pants", price: 120, category: "clothes" },
];

function calculateCategoryTotal(products, category) {
  return products
    .filter((item) => item.category === category)
    .map((item) => {
      console.log(`Product: ${item.name} (${item.price})`);
      return item.price;
    })
    .reduce((acc, price) => acc + price, 0);
}

console.log(calculateCategoryTotal(items, "clothes"));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 8 — Combine filter + map + reduce
Create a function processNumbers(numbers) that:
1 - Filters only the numbers greater than 0
2 - Maps each remaining number to its square (number × number)
3 - Reduces the result by summing all squared values

In short:
👉 filter positives → square them → sum everything
*/

// function processNumbers(numbers = []) {
//   const evenNumbers = numbers
//     .filter((e) => e > 0)
//     .map((j) => j * j)
//     .reduce((acc, number) => acc + number, 0);

//   return evenNumbers;
// }

// console.log(processNumbers([1, -2, 3, 0, 4]));
// // Steps:
// // Filter > 0 → [1, 3, 4]
// // Square → [1, 9, 16]
// // Sum → 26
// // ➞ 26

// console.log(processNumbers([-1, -5, -3]));
// // ➞ 0 (because no positive numbers)

// console.log(processNumbers([2, 2, 2]));
// // Filter → [2,2,2]
// // Square → [4,4,4]
// // Sum → 12
// // ➞ 12

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 8 — New Exercise (similar to exercise 7)
Count how many times each number appears
Create a function countNumbers(array) that receives an array of numbers and returns an object 
showing how many times each number appears.
*/

// function countNumbers(numbers = []) {
//   return numbers.reduce((acc, number) => {
//     acc[number] = (acc[number] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(countNumbers([1, 2, 4, 3, 1, 4]));
// // ➞ { 1: 2, 2: 2, 3: 1, 4: 1 }

// console.log(countNumbers([5, 5, 6, 5]));
// // ➞ { 5: 4 }

// console.log(countNumbers([]));
// // ➞ {}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 8 — Counting and Grouping Elements with reduce()
Problem
Create a function called countOccurrences() that receives an array of strings and returns an object showing how many times each string appears.

You must use only reduce() — no loops or other array methods.
*/

// function countOccurrences(words = []) {
//   return words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(
//   countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// );
// // ➞ { apple: 3, banana: 2, orange: 1 }

// console.log(countOccurrences(["car", "bike", "car", "car", "bus"]));
// // ➞ { car: 3, bike: 1, bus: 1 }

// console.log(countOccurrences([]));
// // ➞ {}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 7.3 - 4. Exercício usando reduce
Dado um array de palavras, conte quantas começam com a mesma primeira letra.

*/

// function firstLetter(str) {
//   return str.reduce((acc, word) => {
//     const first = word[0];
//     acc[first] = (acc[first] || 0) + 1;
//     return acc;
//   }, {});
// }
// console.log(firstLetter(["car", "cat", "dog", "door", "cup"]));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 7.3 - 3. Exercício usando for...in
Crie uma função que receba uma string e conte quantas vezes cada posição (índice) contém uma letra maiúscula.

*/

// function capitalLetter(string) {
//   const result = {};
//   for (let letter in string) {
//     if (string[letter] === string[letter].toUpperCase()) {
//       result[letter] = (result[letter] || 0) + 1;
//     }
//   }
//   return result;
// }

// console.log(capitalLetter("AbcDefG"));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 7.2 - Exercício usando forEach
Dado um array de números, conte quantas vezes cada número par aparece.
*/

// function countEven(str) {
//   const resultEven = {};
//   str.forEach((e) => {
//     if (e % 2 === 0) {
//       resultEven[e] = (resultEven[e] || 0) + 1;
//     }
//   });
//   console.log(resultEven);
// }

// countEven([2, 4, 2, 6, 4, 2, 8, 10, 8]);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 7.1 - Exercícios para entender o 7
Crie uma função que receba uma string e conte quantas vezes cada vogal aparece nela.
*/

// function countVowel(str) {
//   const vowelWord = ["a", "e", "i", "o", "u"];
//   const resultVowel = {};

//   for (let i = 0; i < str.length; i++) {
//     const word = str[i];

//     if (vowelWord.includes(word)) {
//       resultVowel[word] = (resultVowel[word] || 0) + 1;
//     }
//   }

//   return resultVowel;
// }

// console.log(countVowel("programacao"));

// function countString(word) {
//   const letters = word.split("");
//   const vowelWord = ["a", "e", "i", "o", "u"];
//   const vowelResult = {};

//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < vowelWord.length; j++) {
//       if (word[i] === vowelWord[j]) {
//         vowelResult[word[i]] = (vowelResult[word[i]] || 0) + 1;
//       }
//     }
//   }
//   return vowelResult;
// }

// console.log(countString("programacao"));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
🟡 Exercise 7 — Counting and Grouping Elements with reduce()
🧩 Problem
- Create a function called countOccurrences() that receives an array of strings and returns 
an object showing how many times each string appears.
- You must use only reduce() — no loops or other array methods.
*/

// function countOccurrences(strings = []) {
//   return strings.reduce((acc, string) => {
//     acc[string] = (acc[string] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(
//   countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// );
// // ➞ { apple: 3, banana: 2, orange: 1 }

// console.log(countOccurrences(["car", "bike", "car", "car", "bus"]));
// // ➞ { car: 3, bike: 1, bus: 1 }

// console.log(countOccurrences([]));
// // ➞ {}

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
