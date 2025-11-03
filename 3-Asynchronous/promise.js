/* Exercise 5 - Loading Multiple Resources
- Simulate an app that loads three resources at once:
🖼️ Images
🎵 Music
📜 Text content

- Each resource:
Takes between 1 and 3 seconds (random).
Has a 20% chance of failure.
Returns a message like "✅ Images loaded!" when successful, or rejects with "❌ Failed to load images!".

- Use Promise.all() to:
Wait for all resources to load before showing "🚀 All resources ready!".
If any one fails, show the error with "⚠️ Some resources failed to load.".
*/

function imageSimulate() {
  const time = Math.ceil(Math.random() * 3) * 1000;
  const chanceFailure = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (chanceFailure) {
        resolve("✅ Images loaded!");
      } else {
        reject("❌ Failed to load images!");
      }
    }, time);
  });
}

function musicSimulate() {
  const time = Math.ceil(Math.random() * 3) * 1000;
  const chanceFailure = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (chanceFailure) {
        resolve("✅ Music loaded!");
      } else {
        reject("❌ Failed to load Music!");
      }
    }, time);
  });
}

function textContent() {
  const time = Math.ceil(Math.random() * 3) * 1000;
  const chanceFailure = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (chanceFailure) {
        resolve("✅ Text content loaded!");
      } else {
        reject("❌ Failed to load Text content!");
      }
    }, time);
  });
}

Promise.all([imageSimulate(), musicSimulate(), textContent()])
  .then((result) => {
    result.forEach((msg) => console.log(msg));
    console.log("🚀 All resources ready!");
  })
  .catch((error) => console.log("⚠️ Some resources failed to load.", error));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 4 - Movie Streaming Simulation (Promises)
🎬 Exercise: Movie Streaming Simulation (Promises)
You’ll simulate what happens when a user tries to stream a movie.
🧩 Requirements
Create three functions, each returning a Promise:
1 - connectToServer()
- Takes 1–2 seconds.
- Has a 20% chance to fail (reject("❌ Server connection failed!")).
- On success: resolve("🌐 Connected to server!").
2 - loadMovie()
- Takes 2–3 seconds.
- Always succeeds: resolve("🎬 Movie loaded successfully!").
3 - playMovie()
- Takes 1–2 seconds.
- Has a 30% chance to fail (reject("⚠️ Playback error!")).
- On success: resolve("▶️ Movie is now playing!").
*/

// function connectToServer() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceSuccess = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceSuccess) {
//         resolve("🌐 Connected to server!");
//       } else {
//         reject("❌ Server connection failed!");
//       }
//     }, time);
//   });
// }

// function loadMovie() {
//   function timeRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
//   }
//   const time = timeRandom(2, 3);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🎬 Movie loaded successfully!");
//     }, time);
//   });
// }

// function playMovie() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceSuccess = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceSuccess) {
//         resolve("▶️ Movie is now playing!");
//       } else {
//         reject("⚠️ Playback error!");
//       }
//     }, time);
//   });
// }

// connectToServer()
//   .then(() => loadMovie())
//   .then(() => playMovie())
//   .then((result) => console.log("✅ Movie is now playing successfully!"))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("🕒 Process finished."));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 - Online Order Simulation (Promises)
Simulate an e-commerce order system using Promises.

🧩 Requirements:
1 - Create three functions, each returning a Promise:
- placeOrder() → resolves after 1–2 seconds with "🛒 Order placed!"
- processPayment() → resolves after 2–3 seconds with "💳 Payment processed!" or rejects with "❌ Payment failed!" (randomly fail sometimes)
- shipOrder() → resolves after 1–2 seconds with "📦 Order shipped!"

2 - Chain them like this:
placeOrder()
  .then(() => processPayment())
  .then(() => shipOrder())
  .then(() => console.log("✅ Order completed successfully!"))
  .catch(error => console.log(error))
  .finally(() => console.log("🕒 Process finished."));

*/

// function placeOrder() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🛒 Order placed!");
//     }, time);
//   });
// }

// function processPayment() {
//   const time = Math.ceil(Math.random() * 3) * 1000;
//   const randomlyFail = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (randomlyFail) {
//         resolve("💳 Payment processed!");
//       } else {
//         reject("❌ Payment failed!");
//       }
//     }, time);
//   });
// }

// function shipOrder() {
//   const time = Math.ceil(Math.random() * 2) * 1000;

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("📦 Order shipped!");
//     }, time);
//   });
// }

// placeOrder()
//   .then(() => processPayment())
//   .then(() => shipOrder())
//   .then(() => console.log("✅ Order completed successfully!"))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("🕒 Process finished."));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - “Multiple File Downloads”
Simulate downloading 3 files in sequence:
1 - Each file download should be a Promise that resolves after a random time (between 1–3 seconds).
2 - If a download succeeds, print: "✅ File X downloaded!".
3 - If a download fails (use a random boolean to simulate failure), print: "❌ File X failed to download.".
4 - After each download, the next file starts only after the previous one finishes.
5 - After all downloads, print: "📁 All downloads complete." (even if some failed).
*/

// function downloadFile(filterFile) {
//   return new Promise((resolve, reject) => {
//     const time = Math.floor(Math.random() * 3 + 1) * 1000;
//     const success = Math.random() > 0.3;

//     setTimeout(() => {
//       if (success) {
//         resolve(`✅ File ${filterFile} downloaded!`);
//       } else {
//         reject(`❌ File ${filterFile} failed to download.`);
//       }
//     }, time);
//   });
// }

// downloadFile(1)
//   .then((result) => {
//     console.log(result);
//     return downloadFile(2);
//   })
//   .then((result) => {
//     console.log(result);
//     return downloadFile(3);
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("📁 All downloads complete."));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 - “Download Simulator”
Create a Promise that simulates downloading a file:
1 - Print: "⬇️ Starting download...".

2 - Wait 3 seconds (use setTimeout inside the Promise).

3 - Use a variable success = true or false:
- If true, resolve with "✅ Download complete!".
- If false, reject with "❌ Download failed.".

4 - Use .then(), .catch(), and .finally() to handle the result and print messages.
*/

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   console.log("⬇️ Starting download...");

//   setTimeout(() => {
//     if (success) {
//       resolve("✅ Download complete!");
//     } else {
//       reject("❌ Operation failed.");
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("🔁 Download process finished."));

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
