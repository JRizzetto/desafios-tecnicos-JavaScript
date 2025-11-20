/*

*/



// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------


/*
EXERCISE 16 — Closure + Reduce + Grouping + Custom Logic
You're now comfortable creating closures and transforming arrays.
This challenge will combine:
Closures, Filtering, Grouping, Reducing, Dynamic state

Problem
Create a function createCart() that returns an object representing a shopping cart.
The cart should NOT expose the internal array directly, only methods.
Each cart instance must store items internally and allow:

*/

// function createCart() {
//   let shoppingCart = [];

//   return {
//     additem(item, value, qty) {
//       shoppingCart.push({ item: item, value: value, quatidade: qty });
//     },
//     getSummary() {
//       return shoppingCart.reduce((acc, item) => {
//         acc[item.item] = (acc[item.item] || 0) + item.quatidade;

//         return acc;
//       }, {});
//     },
//     getTotal() {
//       const totalCount = shoppingCart.reduce(
//         (acc, item) => acc + item.quatidade * item.value,
//         0
//       );
//       return totalCount;
//     },
//     clear() {
//       shoppingCart = [];
//       console.log(shoppingCart);
//     },
//   };
// }

// const cart = createCart();

// cart.additem("Mouse", 100, 2);
// cart.additem("Keyboard", 250, 1);
// cart.additem("Mouse", 100, 1);

// console.log(cart.getSummary());
// console.log(cart.getTotal());
// cart.clear();

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 15 — Curried Tax Calculator
You need to create a curried function that calculates the final price including tax for different countries.
Requirements
- Create a function taxCalculator(country)
- It returns another function that takes price and returns the price including tax for that country
-  Each country has a different tax rate:

Rules
- Must return a function (closure)
- Must read tax rate from a predefined object
- Must not modify the price argument
- Should work for any country in the tax object
*/

// function taxCalculator(country) {
//   const taxes = {
//     USA: 0.07,
//     EU: 0.2,
//     BRA: 0.12,
//   };

//   return function (value) {
//     try {
//       if (!taxes[country]) {
//         throw new Error(`Unknown country: ${country}`);
//       }
//     } catch (error) {
//       console.log("Error message: " + error);
//       return null;
//     }

//     return value + value * taxes[country];
//   };
// }

// const usaTaxe = taxCalculator("BRAZIL");
// console.log(usaTaxe(100).toFixed(2));

// const euTax = taxCalculator("EU");
// console.log(euTax(50).toFixed(2));

// const braTax = taxCalculator("BRA");
// console.log(braTax(200).toFixed(2));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
📌 Exercise 14 — "Configurable Discount System"
You must create a function that stores a discount percentage in a closure and returns another function that applies the discount to a list of products
- Requirements:
The outer function receives a discount (e.g., 0.10 for 10%)
It must return a function
- The returned function must:
Receive an array of products
Return a new array (don't mutate original)
Each product should include a new field:
"finalPrice: price after discount"
*/

// function priceDiscount(discount) {
//   return function (products) {
//     return products.map((product) => {
//       return {
//         ...product,
//         finalPrice: product.price - product.price * discount,
//       };
//     });
//   };
// }

// const apply10 = priceDiscount(0.1);
// console.log(
//   apply10([
//     { name: "Laptop", price: 3000 },
//     { name: "Mouse", price: 100 },
//   ])
// );

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 13 — Personalized Filter Factory (Closures + Array Operations)
Create a function createFilter(minPrice, category) that returns a filtering function for products.
Then use it to filter a product list.
Requirements:
- The outer function receives:
minPrice (number)
category (string)
- It must return a function that:
Receives an array of products
Filters only items matching both conditions
Returns an array of product names only (not objects)
➡ Closure must store minPrice and category.
➡ You must use .filter() and .map() inside the returned function.
*/

// function createFilter(minPrice, category) {
//   return function (products) {
//     return products
//       .filter(
//         (product) => product.price > minPrice && product.category === category
//       )
//       .map((product) => product.name);
//   };
// }

// const filter = createFilter(1500, "electronics");
// console.log(
//   filter([
//     { id: 1, name: "Laptop", category: "electronics", price: 3000, stock: 5 },
//     { id: 2, name: "Shirt", category: "clothes", price: 80, stock: 20 },
//     { id: 3, name: "Mouse", category: "electronics", price: 100, stock: 50 },
//     { id: 4, name: "Pants", category: "clothes", price: 120, stock: 15 },
//     { id: 5, name: "TV", category: "electronics", price: 2500, stock: 3 },
//     { id: 6, name: "Sneakers", category: "clothes", price: 300, stock: 10 },
//     { id: 7, name: "Keyboard", category: "electronics", price: 150, stock: 40 },
//   ])
// );

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 12.2 -  Create a "bank account" closure
You must write a function createAccount(initialBalance) that:
- Stores the balance privately (not accessible directly)
- Returns an object with methods:
.deposit(amount)
.withdraw(amount)
.balance() → returns current balance
*/

// function createAccount(initialBalance) {
//   let privately = initialBalance;

//   return {
//     deposit(amount) {
//       privately += amount;
//       return privately;
//     },
//     withdraw(amount) {
//       privately -= amount;
//       return privately;
//     },
//     balance() {
//       return privately;
//     },
//   };
// }

// const accountBank = createAccount(300);
// accountBank.deposit(500);
// accountBank.withdraw(100);
// console.log(accountBank.balance());

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 12.1 - Create a counter that increments by a custom value
Goal:
Starts from 0
Increments by the given step each time
Keeps the value private (using closure)

Bonus challenge (optional)
Allow resetting the counter by calling a method:
const counter = createStepCounter(3);

console.log(counter.next()); // 3
console.log(counter.next()); // 6
counter.reset();
console.log(counter.next()); // 3
*/

// function customValue(value) {
//   let counter = 0;

//   return {
//     next() {
//       counter += value;
//       return counter;
//     },
//     reset() {
//       counter = 0;
//       return counter;
//     },
//   };
// }

// const counter = customValue(5);
// console.log(counter.next());
// console.log(counter.next());
// counter.reset();
// console.log(counter.next());
// console.log(counter.next());

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
EXERCISE 12 — Closure Counter
Create a function createCounter() that returns another function.
This returned function should increment and return a counter every time it's called, without exposing the counter directly.
*/

// function createCounter() {
//   let counter = 0;

//   return function () {
//     counter++;
//     return counter;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 11 — Create a Function Factory (Closures)
You will create a function that returns another function, and the inner function should remember a value from the outer function (closure).
Task
Create a function createMultiplier(multiplier) that returns a new function which multiplies any number by the value passed to createMultiplier.
*/

// function createMultiplier(multiplier) {
//   return function (number) {
//     return multiplier * number;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5));

// const triple = createMultiplier(3);
// console.log(triple(7));

// const timesTen = createMultiplier(10);
// console.log(timesTen(9));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.9 - Group purchases by customer and sum totals
Given:
Using reduce, produce this:
{
  Alice: {
    items: ["Book", "Pencil", "Notebook"],
    total: 48
  },
  Bob: {
    items: ["Pen", "Backpack"],
    total: 55
  }
}

👉 Requirements
Keys must be customer names.
Each customer should have:
items array (list of item names)
total number (sum of prices)
Only one reduce.
Handle the case where the customer doesn’t exist yet.
*/

// const purchases = [
//   { customer: "Alice", item: "Book", price: 30 },
//   { customer: "Bob", item: "Pen", price: 5 },
//   { customer: "Alice", item: "Pencil", price: 3 },
//   { customer: "Alice", item: "Notebook", price: 15 },
//   { customer: "Bob", item: "Backpack", price: 50 },
// ];

// const groupPurchases = purchases.reduce((acc, purchase) => {
//   if (!acc[purchase.customer]) {
//     acc[purchase.customer] = { items: [], total: 0 };
//   }

//   acc[purchase.customer].items.push(purchase.item);
//   acc[purchase.customer].total += purchase.price;

//   return acc;
// }, {});

// console.log(groupPurchases);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.8 - Transform an array into an object keyed by ID
Given:
Using reduce, transform it into this object:
{
  1: { name: "Keyboard", price: 100 },
  2: { name: "Mouse", price: 50 },
  3: { name: "Monitor", price: 900 }
}

Requirements:
The keys of the resulting object must be the id.
Each key stores an object with name and price only.
Use one reduce.
Don’t mutate the original objects (optional, but ideal).


*/

// const products = [
//   { id: 1, name: "Keyboard", price: 100 },
//   { id: 2, name: "Mouse", price: 50 },
//   { id: 3, name: "Monitor", price: 900 },
// ];

// const transformObject = products.reduce((acc, product) => {
//   acc[product.id] = { name: product.name, price: product.price };

//   return acc;
// }, {});

// console.log(transformObject);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.7 - Group people by age range
You are given:
Using reduce, return this:
{
  child: ["Ana", "Eva"],       // ages 0–12
  teen: ["Carla"],             // ages 13–17
  adult: ["Bruno", "Diego", "Felipe"] // 18+
}

👉 Rules:
Use one reduce.
Push only the names, not the entire objects.
Use conditions to choose the correct group.
You must initialize the accumulator with the three group
*/

// const people = [
//   { name: "Ana", age: 12 },
//   { name: "Bruno", age: 25 },
//   { name: "Carla", age: 17 },
//   { name: "Diego", age: 33 },
//   { name: "Eva", age: 8 },
//   { name: "Felipe", age: 41 },
// ];

// const groupPeople = people.reduce(
//   (acc, item) => {
//     if (item.age <= 12) {
//       acc.child.push(item.name);
//     } else if (item.age <= 17) {
//       acc.teen.push(item.name);
//     } else {
//       acc.adult.push(item.name);
//     }

//     return acc;
//   },
//   {
//     child: [],
//     teen: [],
//     adult: [],
//   }
// );

// console.log(groupPeople);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.6 - Count occurrences of each word (frequency map)
Given this array:
Use reduce to build a frequency counter
Dynamically create keys in the accumulator
Practice checking whether a property exists before incrementing it

Expected return:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const countWords = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// console.log(countWords);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.5 — Group objects by a property (object accumulator)
Now we increase difficulty a bit.
Using reduce, return this:
{
  adult: ["Alice", "Carol"],
  minor: ["Bob", "Dave"]
}
*/

// const people = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "Carol", age: 30 },
//   { name: "Dave", age: 15 },
// ];

// const adultPeople = people.reduce(
//   (acc, item) => {
//     if (item.age >= 18) {
//       acc.adult.push(item.name);
//     } else {
//       acc.minor.push(item.name);
//     }
//     return acc;
//   },
//   { adult: [], minor: [] }
// );

// console.log(adultPeople);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.4 — Sum values inside objects
Using reduce, return the total price of all items.
*/

// const cart = [
//   { name: "Apple", price: 4 },
//   { name: "Banana", price: 2 },
//   { name: "Orange", price: 5 },
// ];

// const countPrice = cart.reduce((acc, price) => acc + price.price, 0);

// console.log(countPrice);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.3 - Count how many numbers are even and odd
*/

// const numbers = [1, 4, 7, 10, 12, 3];

// function evenOddNumbers(numbers) {
//   return numbers.reduce(
//     (acc, number) => {
//       if (number % 2 === 0) {
//         acc.even++;
//       } else {
//         acc.odd++;
//       }

//       return acc;
//     },
//     { even: 0, odd: 0 }
//   );
// }

// console.log(evenOddNumbers(numbers));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.2 - (Very Simple):
Using reduce, return the sum of all numbers in this array:
*/

// const numbers = [4, 7, 1, 3];

// function sumNumbers(numbers) {
//   return numbers.reduce((acc, number) => acc + number, 0);
// }
// console.log(sumNumbers(numbers));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10.1 — Group Numbers by “Even” or “Odd”
Create a function groupByParity(numbers) that groups numbers into:
"even" → all even numbers
"odd" → all odd numbers
Using only reduce (no map, no filter).
*/

// const numbers = [1, 2, 3, 4, 5, 6];

// function groupByParity(numbers) {
//   return numbers.reduce(
//     (acc, number) => {
//       if (number % 2 === 0) {
//         acc[even] = [];
//         acc.even.push(number);
//       } else {
//         acc[odd] = [];
//         acc.odd.push(number);
//       }

//       return acc;
//     },
//     { even: [], odd: [] }
//   );
// }

// console.log(groupByParity(numbers));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 10 — Group Objects by Category (reduce)
You will receive an array of products similar to this:

groupByCategory(products);

// ➞ {
  electronics: [
    { name: "Laptop", category: "electronics", price: 3000 },
    { name: "Mouse", category: "electronics", price: 100 },
    { name: "TV", category: "electronics", price: 2500 }
  ],
  clothes: [
    { name: "Shirt", category: "clothes", price: 80 },
    { name: "Pants", category: "clothes", price: 120 }
  ]
}

🧠 Rules:
Use ONLY reduce (no map or filter).
The accumulator must start as {}.
Each category must become a key (electronics, clothes, etc).
Each value must be an array of objects belonging to that category.
*/

// const products = [
//   { name: "Laptop", category: "electronics", price: 3000 },
//   { name: "Shirt", category: "clothes", price: 80 },
//   { name: "Mouse", category: "electronics", price: 100 },
//   { name: "Pants", category: "clothes", price: 120 },
//   { name: "TV", category: "electronics", price: 2500 },
// ];

// function orderCategory(items) {
//   return items.reduce((acc, product) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});
// }
// console.log(orderCategory(products));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 9.1 — Working With Arrays of Objects (filter + map + reduce)
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

// const items = [
//   { name: "Laptop", price: 3000, category: "electronics" },
//   { name: "Mouse", price: 100, category: "electronics" },
//   { name: "Shirt", price: 80, category: "clothes" },
//   { name: "Headset", price: 200, category: "electronics" },
//   { name: "Pants", price: 120, category: "clothes" },
// ];

// function calculateCategoryTotal(products, category) {
//   return products
//     .filter((item) => item.category === category)
//     .map((item) => {
//       console.log(`Products: ${item.name}(${item.price})`);
//       return item.price;
//     })
//     .reduce((acc, price) => {
//       return acc + price;
//     }, 0);
// }

// console.log(calculateCategoryTotal(items, "electronics"));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

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

// const items = [
//   { name: "Laptop", price: 3000, category: "electronics" },
//   { name: "Mouse", price: 100, category: "electronics" },
//   { name: "Shirt", price: 80, category: "clothes" },
//   { name: "Headset", price: 200, category: "electronics" },
//   { name: "Pants", price: 120, category: "clothes" },
// ];

// function calculateCategoryTotal(products, category) {
//   return products
//     .filter((item) => item.category === category)
//     .map((item) => {
//       console.log(`Product: ${item.name} (${item.price})`);
//       return item.price;
//     })
//     .reduce((acc, price) => acc + price, 0);
// }

// console.log(calculateCategoryTotal(items, "clothes"));

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

/*
Exercise 8.1 — Combine filter + map + reduce
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
🟡 Exercise 7.4 — Counting and Grouping Elements with reduce()
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
