/* Exercise 2 - “Multiple File Downloads”
Simulate downloading 3 files in sequence:
1 - Each file download should be a Promise that resolves after a random time (between 1–3 seconds).
2 - If a download succeeds, print: "✅ File X downloaded!".
3 - If a download fails (use a random boolean to simulate failure), print: "❌ File X failed to download.".
4 - After each download, the next file starts only after the previous one finishes.
5 - After all downloads, print: "📁 All downloads complete." (even if some failed).
*/

const myPromise = new Promise((resolve, reject) => {
  let time = () => parseInt(Math.random() * 3 + 1) * 1000;
  let state = () => {
    let result = parseInt(Math.random() * 2);

    if (result === 0) {
      return true;
    } else {
      return false;
    }
  };

  console.log(state());

  setTimeout(() => {
    if (state()) {
      resolve("✅ File 1 downloaded!");
    } else {
      reject("❌ File 1 failed to download.");
    }
  }, time());
});

myPromise.then((result) => console.log(result));

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
