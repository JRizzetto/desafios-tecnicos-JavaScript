const user = {
  name: "Alice",
  greet() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // Works ✅
    }, 1000);
  },
};
user.greet();

const user2 = {
  name: "Alice",
  greet() {
    setTimeout(function () {
      console.log(`Hello, ${this.name}!`); // ❌ undefined
    }, 1000);
  },
};

user2.greet();

/* Exercise 13 - Use this + arrow function + loop
Create an object called library that:
1 - Has a name property (string).
2 - Has a books array, where each book has title and author.
3 - Has a method listBooks() that prints each book like this:
City Library has the book "The Hobbit" by J.R.R. Tolkien

Requirements:
Use an arrow function inside the loop (like you did before).
Use this correctly to refer to the library name.
Use for...of to iterate through the books.
*/

// const library = {
//   name: "City Library",
//   books: [
//     { title: "The black cat", author: "Jaiminho" },
//     { title: "The curious Incident", author: "Pedro Maia" },
//     { title: "Hello World", author: "Maria de Deus" },
//   ],
//   listBooks: function () {
//     for (const book of this.books) {
//       console.log(`${this.name} has the book ${book.title} by ${book.author}
// `);
//     }
//   },
// };

// library.listBooks();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 12 - Team Management System
Create an object called team that manages a group of players.

Your object must:

1 - Have a property name → the team name (e.g., "Warriors").
2 - Have a property players → an empty array to store players.
3 - Have a method addPlayer(name, position) → adds a player object { name, position } to the array.
4 - Have a method listPlayers() → prints a message like:
Team Warriors has player Alice playing as Defender

⚠️ Challenge: Inside listPlayers, try to use an arrow function incorrectly (so it fails with this), and then fix it with the correct function type.

*/

// const team = {
//   name: "Palmeiras",
//   players: [],
//   addPlayer: function (name, position) {
//     this.players.push({ name, position });
//   },
//   listPlayers: function () {
//     this.players.forEach((player) => {
//       console.log(
//         `Team ${this.name} has player ${player.name} playing as ${player.position}`
//       );
//     });
//   },
// };

// team.addPlayer("Flaco Lopez", "Attacker");
// team.addPlayer("Gustavo Gomez", "Defenser");
// team.addPlayer("Raphael Veiga", "Midfielder");

// console.log(team.players);
// team.listPlayers();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 11 - Shopping Cart with Discount
Create an object called storeCart with the following structure:
Requirements:
1 - addItem(product, price, quantity) → should add a new object into items.
2 - calculateTotal() → should use reduce() to calculate the total (price × quantity).
3 - getSummary() → should return a template literal string like this:
Items: 3
Subtotal: $1350
Discount: $135
Final Total: $1215

4 - Use regular functions where this is needed.
5 - Test your code by adding at least 3 products.
*/

// const storeCart = {
//   items: [],
//   discount: 0.1, // 10% discount
//   addItem: function (product, price, quantity) {
//     this.items.push({ product, price, quantity });
//   },
//   calculateTotal: function () {
//     return this.items.reduce(
//       (acc, cart) => (acc += cart.price * cart.quantity),
//       0
//     );
//   },
//   getSummary: function () {
//     const items = this.items.length;
//     const subtotal = this.calculateTotal();
//     const discount = this.discount * subtotal;
//     const finalPrice = subtotal - discount;

//     return `
//     Items: ${items}
//     Subtotal: $${subtotal}
//     Discount: $${discount}
//     Final Total: $${finalPrice}
// `;
//   },
// };

// storeCart.addItem("wheel", 100, 4);
// storeCart.addItem("Steering Wheel", 100, 1);
// storeCart.addItem("Seat", 350, 1);

// console.log(storeCart.items);
// console.log(`Total: $${storeCart.calculateTotal()}`);
// console.log(`Total: ${storeCart.getSummary()}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 10 - Shopping cart with this
Create an object called cart that represents a shopping cart.
It should have:

A property items — an array of objects, where each object has name and price.
A method addItem that adds a new item to the cart (using this.items.push()).
A method getTotal that calculates the total price of all items (using this.items.reduce()).

*/

// const cart = {
//   items: [],

//   addItem: function (product, price) {
//     this.items.push({ product, price });
//   },

//   getTotal: function () {
//     return this.items.reduce((acc, item) => acc + item.price, 0);
//   },
// };

// cart.addItem("Laptop", 1200);
// cart.addItem("Mouse", 50);
// cart.addItem("Keyboard", 100);

// console.log(cart.items);
// console.log(`Total: $${cart.getTotal()}`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 9 - Arrow “this” vs Regular “this” (Reversed Scenario)
Create an object called team that has a name property and a members array.
Inside it, make a method called showMembers() that uses a regular function and an arrow function together.

Here’s the idea (you must fill in the logic):

Goal:

The first forEach (regular function) should log undefined for the name.

The second forEach (arrow function) should correctly show "Developers".

*/

// const team = {
//   name: "Developers",
//   members: ["Alice", "Bob", "Charlie"],
//   showMembers: function () {
//     this.members.forEach(function (member) {
//       // regular function here
//       console.log(`${this.name} has ${member}`);
//     });

//     this.members.forEach((member) => {
//       // arrow function here
//       console.log(`${this.name} has ${member}`);
//     });
//   },
// };

// team.showMembers();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 8 - Arrow Functions vs Regular Functions with this
Here’s the key concept before the exercise:
Regular functions create their own this context (the value of this depends on how the function is called).
Arrow functions don’t create their own this; they inherit it from the scope where they were defined.

Task:
1 - Predict what each function will print.
2 - Then run it in your console to confirm.
3 - After that, explain why each one behaves differently.
*/

// const person = {
//   name: "Alice",
//   sayNameRegular: function () {
//     console.log("Regular:", this.name);
//   },
//   sayNameArrow: () => {
//     console.log("Arrow:", this.name);
//   },
// };

// person.sayNameRegular(); //
// person.sayNameArrow();   //

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 7 - Map with Arrow Functions
You have this array of numbers:
Task:
1 - Use map with a regular function to create a new array with each number doubled.
2 - Use map again, but with an arrow function, to do the same thing.
*/

// const numbers = [1, 2, 3, 4, 5];

// // Regular Function
// function regularNumbers() {
//   const newNumbers = numbers.map((number) => number * 2);
//   return newNumbers;
// }
// const regularResult = regularNumbers();
// console.log(regularResult);

// // Arrow Function
// const arrownumbers = () => numbers.map((number) => number * 2);

// const arrowResult = arrownumbers();
// console.log(arrowResult);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 6 - Simple Arrow Function
1 - Create a regular function called square that receives a number and returns its square.
2 - Then, rewrite it as an arrow function called squareArrow.

Your task: write both versions, run them, and see that they give the same result.

*/

// // Regular function
// function square(number) {
//   return number * number;
// }

// // Arrow function
// const squareArrow = (number) => {
//   return number * number;
// };

// // Test them
// console.log(square(5)); // should print 25
// console.log(squareArrow(5)); // should print 25

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 5 - Exercise Object Arrown Function
const classroom = {
  teacher: "Mr. Smith",
  students: ["Alice", "Bob", "Charlie", "David"],
};

Your Task:
- Create a method inside classroom that prints each student’s name prefixed by the teacher’s name, like:
Mr. Smith teaches Alice
Mr. Smith teaches Bob
...

- Use an arrow function inside the method so this.teacher works correctly.
*/

// const classroom = {
//   teacher: "Mr. Smith",
//   students: ["Alice", "Bob", "Charlie", "David"],
//   printStudents: function () {
//     this.students.map((student) => {
//       console.log(`${this.teacher} teaches ${student}`);
//     });
//   },
// };
// classroom.printStudents();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4 - Regular vs Arrow Functions
You have the object below:
Your Tasks:
1 - Call both methods:
team.printMembersRegular();
team.printMembersArrow();
2 - Observe the output.
3 - Explain in words:
Why does printMembersRegular not work as expected?
Why does printMembersArrow work and correctly logs the team name with each member?

*/

// const team = {
//   name: "Dream Team",
//   members: ["Alice", "Bob", "Charlie"],

//   // Regular function method
//   printMembersRegular: function () {
//     this.members.forEach(function (member) {
//       console.log(this.name + ": " + member);
//     });
//   },

//   // Arrow function method
//   printMembersArrow: function () {
//     this.members.forEach((member) => {
//       console.log(this.name + ": " + member);
//     });
//   },
// };

// team.printMembersRegular();
// team.printMembersArrow();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - Arrow Functions vs Regular Functions
You have the object below:
👉 Your task:
1 - Call both methods:
counter.regularIncrement();
counter.arrowIncrement();

2 - Observe the result.
3 - Explain why one of them works (increments the value) and the other doesn’t.

*/

// const counter = {
//   value: 0,
//   regularIncrement: function () {
//     setTimeout(function () {
//       this.value++;
//       console.log("Regular Function:", this.value);
//     }, 1000);
//   },
//   arrowIncrement: function () {
//     setTimeout(() => {
//       this.value++;
//       console.log("Arrow Function:", this.value);
//     }, 1000);
//   },
// };

// counter.regularIncrement();
// counter.arrowIncrement();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 - Basic this behavior
Task:
1 - Use .map() inside showHobbies.
2 - Use an arrow function to print each hobby in the format:
"Alice likes reading"

Hint: Use this.name inside the arrow function.
*/

// const person = {
//   name: "Alice",
//   hobbies: ["reading", "traveling", "coding"],
//   showHobbies: function () {
//     this.hobbies.map((hobby) => {
//       const eachHobby = () => {
//         console.log(`${this.name} likes ${hobby}`);
//       };
//       eachHobby();
//     });
//   },
// };

// person.showHobbies();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
