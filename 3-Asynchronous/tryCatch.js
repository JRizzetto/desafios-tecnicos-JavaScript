/* Exercise 2 - input validation and array processing
Write a function getUserById(id) that:
1 - Accepts a user ID as a parameter.
2 - Checks if the ID is a number. If not, throw an error "Invalid ID: must be a number".
3 - Uses a predefined array of users like this:

4 - Finds the user with that ID. If not found, throw an error "User not found".
5 - If found, log the user name.
getUserById(2);   // Should log: Bob
getUserById("a"); // Should log: Invalid ID: must be a number
getUserById(5);   // Should log: User not found

*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Write a function getUserById(id) that:
// 1 - Accepts a user ID as a parameter.
function getUserById(id) {
  try {
    if (isNaN(id)) {
      throw new Error("Invalid ID: must be a number");
    }

    const findUser = users.find((e) => e.id === id);
    if (!findUser) {
      throw new Error("Invalid ID: User not found");
    } else {
      console.log(findUser.name);
    }
  } catch (error) {
    console.log(error);
  }
}

getUserById(2); // Should log: Bob
getUserById("a"); // Should log: Invalid ID: must be a number
getUserById(5); // Should log: User not found

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 🧩 Exercise 1 - Handle errors with try...catch
1 - Create a function called divideNumbers(a, b).
2 - Inside it, use a try...catch block to divide a / b.
3 - If b is 0, throw a custom error like:
- throw new Error("Cannot divide by zero");
4 - In the catch block, show a friendly error message.
5 - Test the function with:
divideNumbers(10, 2); // should work
divideNumbers(10, 0); // should show error
*/

// function divideNumbers(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     const result = a / b;
//     console.log(`Result: ${result}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// divideNumbers(10, 2); // should work
// divideNumbers(10, 0); // should show error

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
