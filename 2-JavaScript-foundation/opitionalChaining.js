


/* Exercise 4
You have a hotel object with rooms and their guests. Some rooms might not be booked yet.
Try to solve it using optional chaining and default values.

Create a function getGuestName(hotel, roomNumber)
that returns the guest name in the given room
If the room is empty or doesn't exist, return "Room is empty"
*/

// const hotel = {
//   name: "SeaView",
//   rooms: {
//     101: { guest: { name: "Alice", nights: 3 } },
//     102: { guest: { name: "Bob", nights: 2 } },
//     103: { guest: {} }, // empty room
//   },
// };

// function getGuestName(hotel, roomNumber) {
//   const result = hotel.rooms[roomNumber]?.guest?.name ?? "Room is empty";

//   console.log(result);
// }

// getGuestName(hotel, 103);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 - Optional chaining in nested objects
You have a university object that stores data about departments and professors.
Some departments might not have professors yet.

🎯 Your task:
Create a function getProfessor(university, department, subject)
that returns the professor’s name if it exists, otherwise returns "Professor not found".

*/

// const university = {
//   science: {
//     professors: {
//       physics: { name: "Dr. Newton" },
//       chemistry: { name: "Dr. Curie" },
//     },
//   },
//   arts: {
//     professors: {
//       history: { name: "Dr. Brown" },
//     },
//   },
//   law: {}, // no professors yet
// };

// function getProfessor(university, department, subject) {
//   const result =
//     university[department]?.professors?.[subject]?.name ??
//     "Professor not found";

//   return console.log(result);
// }

// getProfessor(university, "science", "physics"); // "Dr. Newton"
// getProfessor(university, "science", "chemistry"); // "Dr. Curie"
// getProfessor(university, "arts", "history"); // "Dr. Brown"
// getProfessor(university, "law", "civil"); // "Professor not found"

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - Let’s make it a bit more real-world.
👉 Here’s your exercise setup:

Your task:
Create a function called getManager that receives the object and a department name, and returns the manager’s name.

✅ If the department doesn’t exist, it should return "Department not found".
✅ Use optional chaining (?.) to avoid errors.
*/

// const company = {
//   name: "TechCorp",
//   departments: {
//     sales: { manager: "Alice", employees: 10 },
//     engineering: { manager: "Bob", employees: 25 },
//   },
// };

// function getManager(company, managerName) {
//   return console.log(company?.departments[managerName]?.manager);
// }

// getManager(company, "engineering"); // "Bob"
// getManager(company, "marketing"); // "Department not found"

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 — Optional chaining (easy)
Great — let’s start simple and build up.
You’ll get a small object that sometimes misses nested properties. Use optional chaining (?.) so your code never throws.

Task: 
write a function getUserCity(user) that returns the user’s city if it exists, otherwise returns the string "Unknown".

*/

// // Data you should test with:
// const user1 = {
//   name: "Alice",
//   address: { city: "Lisbon", street: "Av. Liberdade" },
// };

// const user2 = {
//   name: "Bob",
//   // no address
// };

// const user3 = {
//   name: "Carol",
//   address: null,
// };

// // Function skeleton — fill it
// function getUserCity(user) {
//   return user?.address?.city ?? "Unknown";
// }

// // Expected behaviour:
// console.log(getUserCity(user1)); // "Lisbon"
// console.log(getUserCity(user2)); // "Unknown"
// console.log(getUserCity(user3)); // "Unknown"
// console.log(getUserCity()); // "Unknown"  (should also be safe if user is undefined)

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
