/* Exercise 3 - Fetch Multiple APIs at the Same Time
Goal:
Fetch data from these 3 endpoints simultaneously:
- Users → https://jsonplaceholder.typicode.com/users
- Posts → https://jsonplaceholder.typicode.com/posts
- Comments → https://jsonplaceholder.typicode.com/comments

Steps:
1 - Create an async function called fetchAllData().
2 - Inside it, use Promise.all() to fetch all three endpoints at once.
3 - Convert each response to JSON.
4 - Log something like:
👥 Users loaded: 10  
📝 Posts loaded: 100  
💬 Comments loaded: 500
✅ All data successfully fetched!
*/

async function fetchExercise() {
  try {
    const [userRes, postRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const [users, posts, comments] = await Promise.all([
      userRes.json(),
      postRes.json(),
      commentsRes.json(),
    ]);

    console.log("👤 Users:");
    for (const user of users) console.log(`Name: ${user.name}`);

    console.log("📝 Posts:");
    for (const post of posts) console.log(`Name: ${post.body}`);

    console.log("💬 Comments:");
    for (const comment of comments) console.log(`Name: ${comment.body}`);
  } catch (error) {
    console.log("❌ Error fetching data:", error);
  }
}
fetchExercise();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - Perfect 😎 — let’s rewrite your same fetch() example using async/await, 
which makes the code easier to read and maintain.
*/

// async function fetchExercise() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const datas = await response.json();

//     for (const user of datas) {
//       console.log(`👤 Name: ${user.name} | ✉️ Email: ${user.email}`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchExercise();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 - 🎯 Your First Exercise
Create a script that:
1 - Uses fetch() to request a list of users from this test API:
👉 https://jsonplaceholder.typicode.com/users

2 - Converts the response to JSON.
3 - Logs each user’s name and email to the console.

💡 Tip: Use for...of to loop through the results.
*/

// function fetchExercise() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((datas) => {
//       for (const user of datas) {
//         console.log(`👤 Name: ${user.name} | ✉️ Email: ${user.email}`);
//       }
//     })
//     .catch((error) => console.log(error));
// }
// fetchExercise();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
