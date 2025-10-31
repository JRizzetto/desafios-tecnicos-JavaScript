/* Exercise 2 – Store Inventory System
🗂 You can do this all in one file called inventory.js.

📘 Instructions
1️⃣ Create an array of products, where each product is an object:

2️⃣ Use a for...of loop
→ to iterate over each product.
→ Inside it, use a for...in loop to display the product’s properties.
Your output should look like this:
Product info:
name: Laptop
price: 3500
stock: 4
-----------------
Product info:
name: Mouse
price: 120
stock: 10
-----------------
...

After listing them, calculate the total value in stock using a for...of:
Total stock value: 17620
*/

const products = [
  { name: "Laptop", price: 3500, stock: 4 },
  { name: "Mouse", price: 120, stock: 10 },
  { name: "Keyboard", price: 230, stock: 6 },
];

for (const product of products) {
  console.log("Product info:");
  for (const key in product) {
    console.log(`${key}: ${product[key]}`);
  }
  console.log("-----------------");
}

let total = 0;

for (const product of products) {
  total += product.price * product.stock;
  console.log(product.price * product.stock);
}

console.log(`Total stock value: ${total}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 – Object & Array Iteration
Code structure:
You’ll do this all in a single file called loops.js.

📘 Instructions
1️⃣ Create an object called user:
2️⃣ Use for...in to log:
Property: name - Value: Jefferson
Property: age - Value: 35
Property: city - Value: São Paulo

3️⃣ Create an array called languages:
4️⃣ Use for...of to log each element like:
I am learning: JavaScript
I am learning: HTML
I am learning: CSS

✅ Goal:
Understand when to use for...in (objects) and for...of (arrays or iterable values).
*/

// const user = {
//   name: "Jefferson",
//   age: 35,
//   city: "São Paulo",
// };

// for (const key in user) {
//   console.log(`Property: ${key} - Value: ${user[key]}`);
// }

// const languages = ["JavaScript", "HTML", "CSS"];

// for (const language of languages) {
//   console.log(`I am learning: ${language}`);
// }

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
