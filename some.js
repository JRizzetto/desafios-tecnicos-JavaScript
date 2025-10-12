/* 2 - Exercise: Checking Product Quality
You have an array of products, and each product has:
name → product name
price → numeric value
defective → boolean (true = defective, false = OK)

1 - Use .some() to check if any defective product exists.
2 - If yes, use .filter() to list all defective products.
3 - Then use .find() to get the first defective product and display it separately.
4 - Finally, print everything in a clear, formatted message.
*/

// const products = [
//   { name: "Laptop", price: 3500, defective: false },
//   { name: "Mouse", price: 80, defective: true },
//   { name: "Keyboard", price: 200, defective: false },
//   { name: "Monitor", price: 1200, defective: true },
//   { name: "Headphones", price: 300, defective: false },
// ];

// const defectiveProduct = products.some((product) => product.defective);
// const defectiveProducts = products.filter((product) => product.defective);
// const firstDefective = products.find((product) => product.defective);

// console.log(defectiveProduct);
// console.log(defectiveProducts);
// console.log(firstDefective);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise check failing student
You have an array of students with their names and scores.
You must check if any student failed the test (a score below 60).

Requirements:
1 - Use .some() to check if there’s at least one failing student.
2 - Print a message depending on the result:

If there is a failing student → "There is at least one student who failed."
If not → "All students passed!"
*/

// const students = [
//   { name: "Alice", score: 75 },
//   { name: "Bob", score: 58 },
//   { name: "Charlie", score: 82 },
//   { name: "David", score: 90 },
// ];

// const failingStudent = students.some((student) => student.score < 60);
// const resultFailingStudent = failingStudent
//   ? `There is at least one student who failed`
//   : `All students passed!`;

// console.log(resultFailingStudent);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise: Checking Product Availability
You have a list of products. Check if any product has a price greater than 1000.

1 - Use .some() to determine if there’s any expensive product.
2 - Store the result (true/false) in a variable.
3 - Log a message like:

"There are expensive products!"

or "All products are affordable."
*/

// const products = [
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 100 },
//   { name: "Monitor", price: 900 },
//   { name: "Laptop", price: 1500 },
//   { name: "Headphones", price: 300 },
// ];

// const expensiveProduct = products.some((product) => product.price > 1000);
// console.log(expensiveProduct);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
