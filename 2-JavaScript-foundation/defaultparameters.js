/* Exercise 1 — Easy
Create a function called createUser that takes three parameters:
name (string)
age (number)
country (string, default should be "Unknown")

The function should return a string like:
Name: Alice, Age: 30, Country: USA

If no country is passed, it should print:
Name: Alice, Age: 30, Country: Unknown
*/

function createUser(name, Age, Country = "Unknown") {
  console.log(`Name: ${name}, Age: ${Age}, Country: ${Country}`);
}

createUser("Alice", 30, "USA");
createUser("Alice", 30);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
