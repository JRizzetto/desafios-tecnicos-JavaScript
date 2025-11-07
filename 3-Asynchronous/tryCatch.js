/* Exercise 6 - Fetch user’s todos, posts, and comments together
🧠 Your goal:
Create an async function called fetchUserData(username) that:

1️⃣ Fetches data from these three APIs at the same time using Promise.all():
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/todos
https://jsonplaceholder.typicode.com/comments

2️⃣ Finds the user by their name (e.g., "Leanne Graham").
👉 If not found, throw "User not found".

3️⃣ Filters all posts by that user (post.userId === user.id).
👉 If there are no posts, throw "No posts found for this user".

4️⃣ For each post, count how many comments it has and print:
📝 Post: <title>
💬 Comments: <number of comments>

5️⃣ Fetch the user’s todos (from the same API call) and:
Print how many are completed and how many are pending.
Example:
✅ Completed: 5 | ⏳ Pending: 3

6️⃣ Wrap everything in a try...catch block with clear error messages.

💡 Extra challenge (optional)
Add a check: if any of the API responses have status !== 200,
throw a custom error like "Failed to fetch <resource>".

🧩 Example Output
👤 User: Leanne Graham

📝 Post: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
💬 Comments: 5

📝 Post: qui est esse
💬 Comments: 5

✅ Completed: 7 | ⏳ Pending: 3
*/

// Create an async function called fetchUserData(username) that:
// async function fetchUserData(username) {
//   try {
//     // 1️⃣ Fetches data from these three APIs at the same time using Promise.all():
//     const [usersApi, postsApi, todosApi, commentsApi] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users"),
//       fetch("https://jsonplaceholder.typicode.com/posts"),
//       fetch("https://jsonplaceholder.typicode.com/todos"),
//       fetch("https://jsonplaceholder.typicode.com/comments"),
//     ]);

//     // 💡 Extra challenge (optional)
//     // Add a check: if any of the API responses have status !== 200,
//     // throw a custom error like "Failed to fetch <resource>".
//     if (!usersApi.ok || !postsApi.ok || !todosApi.ok || !commentsApi.ok) {
//       throw new Error("❌ Failed to fetch one or more resources");
//     }

//     const [users, posts, todos, comments] = await Promise.all([
//       usersApi.json(),
//       postsApi.json(),
//       todosApi.json(),
//       commentsApi.json(),
//     ]);

//     // 2️⃣ Finds the user by their name (e.g., "Leanne Graham").
//     // 👉 If not found, throw "User not found".
//     const searchUser = users.find((user) => user.name === username);
//     if (!searchUser) {
//       throw new Error("User not found");
//     }

//     //3️⃣ Filters all posts by that user (post.userId === user.id).
//     // 👉 If there are no posts, throw "No posts found for this user".
//     const allPosts = posts.filter((post) => post.userId === searchUser.id);
//     if (allPosts.length === 0) {
//       throw new Error("No posts found for this user");
//     }

//     // 4️⃣ For each post, count how many comments it has and print:
//     // 📝 Post: <title>
//     // 💬 Comments: <number of comments></number>
//     let countComment = 0;
//     for (const post of allPosts) {
//       console.log(`📝 Title post: ${post.title}`);
//       for (const comment of comments) {
//         if (comment.postId === post.id) {
//           countComment++;
//         }
//       }
//       console.log(`💬 Comments: ${countComment++}`);
//       countComment = 0;
//     }

//     // 5️⃣ Fetch the user’s todos (from the same API call) and:
//     // Print how many are completed and how many are pending.
//     // Example:
//     // ✅ Completed: 5 | ⏳ Pending: 3

//     let countComplet = 0;
//     let countPending = 0;

//     todos.forEach((e) => {
//       if (e.completed) {
//         countComplet++;
//       } else {
//         countPending++;
//       }
//     });
//     console.log(`✅ Completed: ${countComplet} | ⏳ Pending: ${countPending}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUserData("Leanne Graham");

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 6 - Fetch user’s todos, posts, and comments together
🧠 Your goal:
Create an async function called fetchUserData(username) that:

1️⃣ Fetches data from these three APIs at the same time using Promise.all():
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/todos
https://jsonplaceholder.typicode.com/comments

2️⃣ Finds the user by their name (e.g., "Leanne Graham").
👉 If not found, throw "User not found".

3️⃣ Filters all posts by that user (post.userId === user.id).
👉 If there are no posts, throw "No posts found for this user".

4️⃣ For each post, count how many comments it has and print:
📝 Post: <title>
💬 Comments: <number of comments>

5️⃣ Fetch the user’s todos (from the same API call) and:
Print how many are completed and how many are pending.
Example:
✅ Completed: 5 | ⏳ Pending: 3

6️⃣ Wrap everything in a try...catch block with clear error messages.

💡 Extra challenge (optional)
Add a check: if any of the API responses have status !== 200,
throw a custom error like "Failed to fetch <resource>".

🧩 Example Output
👤 User: Leanne Graham

📝 Post: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
💬 Comments: 5

📝 Post: qui est esse
💬 Comments: 5

✅ Completed: 7 | ⏳ Pending: 3
*/

// Create an async function called fetchUserData(username) that:
// async function fetchUserData(username) {
//   try {
//     // 1️⃣ Fetches data from these three APIs at the same time using Promise.all():
//     const [usersApi, postsApi, todosApi, commentsApi] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users"),
//       fetch("https://jsonplaceholder.typicode.com/posts"),
//       fetch("https://jsonplaceholder.typicode.com/todos"),
//       fetch("https://jsonplaceholder.typicode.com/comments"),
//     ]);

//     // 💡 Extra challenge (optional)
//     // Add a check: if any of the API responses have status !== 200,
//     // throw a custom error like "Failed to fetch <resource>".
//     if (!usersApi.ok || !postsApi.ok || !todosApi.ok || !commentsApi.ok) {
//       throw new Error("❌ Failed to fetch one or more resources");
//     }

//     const [users, posts, todos, comments] = await Promise.all([
//       usersApi.json(),
//       postsApi.json(),
//       todosApi.json(),
//       commentsApi.json(),
//     ]);

//     // 2️⃣ Finds the user by their name (e.g., "Leanne Graham").
//     // 👉 If not found, throw "User not found".
//     const searchUser = users.find((user) => user.name === username);
//     if (!searchUser) {
//       throw new Error("User not found");
//     }

//     //3️⃣ Filters all posts by that user (post.userId === user.id).
//     // 👉 If there are no posts, throw "No posts found for this user".
//     const allPosts = posts.filter((post) => post.userId === searchUser.id);
//     if (allPosts.length === 0) {
//       throw new Error("No posts found for this user");
//     }

//     // 4️⃣ For each post, count how many comments it has and print:
//     // 📝 Post: <title>
//     // 💬 Comments: <number of comments></number>
//     let countComment = 0;
//     for (const post of allPosts) {
//       console.log(`📝 Title post: ${post.title}`);
//       for (const comment of comments) {
//         if (comment.postId === post.id) {
//           countComment++;
//         }
//       }
//       console.log(`💬 Comments: ${countComment++}`);
//       countComment = 0;
//     }

//     // 5️⃣ Fetch the user’s todos (from the same API call) and:
//     // Print how many are completed and how many are pending.
//     // Example:
//     // ✅ Completed: 5 | ⏳ Pending: 3

//     let countComplet = 0;
//     let countPending = 0;

//     todos.forEach((e) => {
//       if (e.completed) {
//         countComplet++;
//       } else {
//         countPending++;
//       }
//     });
//     console.log(`✅ Completed: ${countComplet} | ⏳ Pending: ${countPending}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUserData("Leanne Graham");

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 5 - Fetching a user’s posts and comments
Goal: Create an async function called fetchUserPostsAndComments(username) that does the following:
1 - Uses Promise.all() to fetch data from:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
2 - Finds the user by the given name (username).
If not found, throw an error "User not found".
3 - Filters all posts that belong to that user (post.userId === user.id).
If no posts are found, throw "No posts found for this user".
4 - For each post, filter all comments where (comment.postId === post.id).
If a post has no comments, display "No comments for this post".
5 - Use try...catch to handle all possible errors.
6 - Log everything in a readable way, for example:
👤 User: Leanne Graham
📝 Post: sunt aut facere repellat provident occaecati
   💬 Comment: great post!
   💬 Comment: I agree completely!

*/

// Goal: Create an async function called fetchUserPostsAndComments(username) that does the following:
//  1 - Uses Promise.all() to fetch data from:

// async function fetchUserPostsAndComments(username) {
//   try {
//     const [usersApi, postsApi, commentsApi] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users"),
//       fetch("https://jsonplaceholder.typicode.com/posts"),
//       fetch("https://jsonplaceholder.typicode.com/comments"),
//     ]);

//     const [users, posts, comments] = await Promise.all([
//       usersApi.json(),
//       postsApi.json(),
//       commentsApi.json(),
//     ]);

//     // 2 - Finds the user by the given name (username).
//     const searchUser = users.find((e) => e.name === username);
//     // If not found, throw an error "User not found".
//     if (!searchUser) {
//       throw new Error("User not found");
//     }
//     // 3 - Filters all posts that belong to that user (post.userId === user.id).
//     const searchPost = posts.filter((e) => e.userId === searchUser.id);
//     // If no posts are found, throw "No posts found for this user".
//     if (searchPost.length === 0) {
//       throw new Error("No posts found for this user");
//     }

//     console.log(`\n👤 User: ${searchUser.name}\n`);
//     // 4 - For each post, filter all comments where (comment.postId === post.id).
//     for (const idPost of searchPost) {
//       console.log(`📝 - Title: ${idPost.title}\n📝 - Post: ${idPost.body}`);

//       const postComments = comments.filter(
//         (comment) => comment.postId === idPost.id
//       );

//       if (postComments.length === 0) {
//         throw new Error("💬 No comments for this post.\n");
//       } else {
//         for (const comment of postComments) {
//           console.log(`💬 ${comment.name}: ${comment.body}\n`);
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchUserPostsAndComments("Ervin Howell");

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4 - Challenge: “User and Posts Fetcher”
Write an async function called fetchUserAndPosts(username) that:
1 - Uses fetch() to get data from these two APIs:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
2 - Uses Promise.all() to fetch both at the same time.
3 - Finds the user by name (for example, "Leanne Graham").
4 - If the user isn’t found, throw an error "User not found".
5 - Filters all posts made by that user (post.userId === user.id).
6 - If the user has no posts, throw an error "No posts found for this user".
7 - If everything works, log:
👤 User: <user.name>
📝 Post: <post.title>
*/

// // Write an async function called fetchUserAndPosts(username) that:
// async function fetchUserAndPosts(username) {
//   try {
//     // 1 - Uses fetch() to get data from these two APIs:
//     // 2 - Uses Promise.all() to fetch both at the same time.
//     const [userApi, postApi] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users"),
//       fetch("https://jsonplaceholder.typicode.com/posts"),
//     ]);
//     const [users, posts] = await Promise.all([userApi.json(), postApi.json()]);

//     // 3 - Finds the user by name (for example, "Leanne Graham").
//     const findUser = users.find((e) => e.name === username);

//     // 4 - If the user isn’t found, throw an error "User not found".
//     if (!findUser) {
//       throw new Error("User not found");
//     }

//     // 5 - Filters all posts made by that user (post.userId === user.id).
//     const postFilter = posts.filter((e) => e.userId === findUser.id);

//     // 6 - If the user has no posts, throw an error "No posts found for this user".
//     if (postFilter.length === 0) {
//       throw new Error("No posts found for this user");
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   // 7 - If everything works, log:
//   // 👤 User: <user.name>
//   // 📝 Post: <post.title></post.title>
//   console.log(`👤 User: ${findUser.name}`);
//   console.log(`👤 User: ${postFilter.title}`);
// }
// fetchUserAndPosts("Leanne Graham");
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 - input validation and array processing
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

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// // Write a function getUserById(id) that:
// //1 - Accepts a user ID as a parameter.
// function getUserById(id) {
//   try {
//     // 2 - Checks if the ID is a number. If not, throw an error "Invalid ID: must be a number".
//     if (isNaN(id)) {
//       throw new Error("must be a number");
//     }

//     // 3 - Uses a predefined array of users like this:
//     // 4 - Finds the user with that ID. If not found, throw an error "User not found".
//     const userId = users.find((e) => e.id === id);
//     if (!userId) {
//       throw new Error("User not found");
//     }

//     const username = `name: ${userId.name}`;

//     console.log(username);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserById(3);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

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

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// // Write a function getUserById(id) that:
// // 1 - Accepts a user ID as a parameter.
// function getUserById(id) {
//   try {
//     if (isNaN(id)) {
//       throw new Error("Invalid ID: must be a number");
//     }

//     const findUser = users.find((e) => e.id === id);
//     if (!findUser) {
//       throw new Error("User not found");
//     } else {
//       console.log(findUser.name);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserById(2); // Should log: Bob
// getUserById("a"); // Should log: Invalid ID: must be a number
// getUserById(5); // Should log: User not found

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
