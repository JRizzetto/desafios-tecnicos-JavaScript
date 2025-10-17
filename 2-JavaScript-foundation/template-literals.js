/* Exercise 1: Your First Exercise
You have this object:
1 - Create a function introduceUser(user) that returns a string using template literals:
“Hi, my name is Bob, I am 30 years old, and I live in New York.”
2 - Log the returned string to the console.
*/

const user = {
  name: "Bob",
  age: 30,
  city: "New York",
};

function introduceUser(userParms) {
  return `Hi, my name is Bob, I am 30 years old, and I live in New York.`;
}

const result = introduceUser(user);
console.log(result);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
