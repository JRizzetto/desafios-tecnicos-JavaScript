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