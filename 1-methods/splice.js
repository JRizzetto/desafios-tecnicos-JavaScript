/* 6 - Shopping Cart Reorganization
1 - Remove all out-of-stock items (stock === 0) using splice().
Store them in a new array called removedItems.
💡 Hint: loop backwards through the array so the indices don’t shift as you remove elements.
2 - After the removals, insert this object at the start of the cart:
{ id: 100, product: "Promo Bundle", stock: 999 }
3 - Then, insert two new products at index 2:
{ id: 101, product: "Cap", stock: 7 },
{ id: 102, product: "Gloves", stock: 4 }
4 - Print:
The final cart
The removedItems array
*/

const cart = [
  { id: 1, product: "T-shirt", stock: 5 },
  { id: 2, product: "Sneakers", stock: 0 },
  { id: 3, product: "Hat", stock: 2 },
  { id: 4, product: "Jacket", stock: 0 },
  { id: 5, product: "Socks", stock: 10 },
  { id: 6, product: "Belt", stock: 3 },
];

let removedProducts = [];

for (let i = cart.length - 1; i >= 0; i--) {
  if (cart[i].stock === 0) {
    removedProducts.push(cart[i]);
    cart.splice(i, 1);
  }
}

const newStartCart = cart.splice(0, 0, {
  id: 100,
  product: "Promo Bundle",
  stock: 999,
});

const addProducts = cart.splice(
  2,
  0,
  { id: 101, product: "Cap", stock: 7 },
  { id: 102, product: "Gloves", stock: 4 }
);

console.log(cart);
console.log(removedProducts);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 5 - Conference Attendees Manager
1 - Find the index of the first VIP attendee (vip: true).
2 - Starting from that index, remove that VIP and the next non-VIP attendee (2 items total).
3 - At that same position, insert two new attendees:
{ name: "Grace", vip: true }
{ name: "Hector", vip: false }
 4 - Print:
The updated attendees array
The removed attendees (the ones returned by the method)
*/

// const attendees = [
//   { name: "Alice", vip: false },
//   { name: "Bob", vip: true },
//   { name: "Charlie", vip: false },
//   { name: "Diana", vip: true },
//   { name: "Ethan", vip: false },
// ];

// const vipIndex = attendees.findIndex((attend) => attend.vip);

// const changeAttendees = attendees.splice(
//   vipIndex,
//   2,
//   { name: "Grace", vip: true },
//   { name: "Hector", vip: false }
// );

// console.log(attendees);
// console.log(changeAttendees);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 3 - Exercise: Daily Schedule Editor
You have the following array:

1 - Replace the block "Work", "Lunch", "Work" with two new tasks:
"Deep Work"
"Team Sync"
2 - Print the updated schedule and the removed tasks returned by the method.
*/

// const schedule = [
//   "Wake up",
//   "Exercise",
//   "Breakfast",
//   "Work",
//   "Lunch",
//   "Work",
//   "Dinner",
//   "Sleep",
// ];

// const newSchedule = schedule.splice(3, 3, "Deep Work", "Team Sync");
// console.log(schedule);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 2 - Small step (insert & remove single items)
1 - Remove "Song C" from the playlist.
2 - Insert "Song F" after "Song D".
3 - Print the updated playlist and the array of removed songs returned by the method.

Hint: one removal and one insertion — watch indices after each change.
*/

// const playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];

// const removeC = playlist.splice(2, 1);

// const addSong = playlist.splice(3, 0, "Song F");

// console.log(playlist);
// console.log(removeC);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* 1 - Exercise: “Task List Manager”
You have a list of daily tasks:

1 - Remove "Lunch break" from the list (you’ll eat later 😅).
2 - After "Team meeting", add "Project planning".
3 - Replace "Client call" with "Send summary email".
4 - Print the final list of tasks.
5 - Print the array of removed items returned by splice().
*/

// const tasks = [
//   "Check emails",
//   "Team meeting",
//   "Code review",
//   "Lunch break",
//   "Finish report",
//   "Client call",
// ];

// const removeLunch = tasks.splice(3, 1);
// const addTeam = tasks.splice(2, 0, "Project planning");
// const replaceCliente = tasks.splice(5, 1, "Send summary email");

// console.log(tasks);
// console.log(removeLunch);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
