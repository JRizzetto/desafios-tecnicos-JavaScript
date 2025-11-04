/* Exercise 4 - Weather App Simulation
You’ll create a small app that:
1 - Logs in the user.
2 - Fetches user location (simulated).
3 - Then, in parallel, fetches:
- Weather data 🌤️
- Air quality index 🌫️
- News headlines 📰
4 - Finally, shows "✅ All data displayed!" or a failure message if one request fails.
*/

// function loginUser(username, password) {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceFail = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceFail && username && password) {
//         resolve("👤 User logged in!");
//       } else {
//         reject("❌ Login fail");
//       }
//     }, time);
//   });
// }

// function locationFetched() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceFail = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceFail) {
//         resolve("📍 Location fetched!");
//       } else {
//         reject("❌ Location fetched fail. Do your location is turn on?");
//       }
//     }, time);
//   });
// }

// function weatherData() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceFail = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceFail) {
//         resolve("🌤️ Weather data loaded!");
//       } else {
//         reject("❌ Weather data fail. Do your location is turn on?");
//       }
//     }, time);
//   });
// }

// function airQuality() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceFail = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceFail) {
//         resolve("🌫️ Air quality data loaded!");
//       } else {
//         reject("❌ Air quality data fail");
//       }
//     }, time);
//   });
// }

// function newsHeadlines() {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceFail = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceFail) {
//         resolve("📰 News headlines loaded!");
//       } else {
//         reject("❌ News headlines don't loaded, something fail");
//       }
//     }, time);
//   });
// }

// async function allDatas() {
//   try {
//     const login = await loginUser("username", "password");
//     console.log(login);

//     const locFetched = await locationFetched();
//     console.log(locFetched);

//     const parallel = await Promise.all([
//       weatherData(),
//       airQuality(),
//       newsHeadlines(),
//     ]);
//     parallel.forEach((element) => console.log(element));
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("✅ All data displayed!");
// }
// allDatas();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 - Advanced Async/Await with Multiple Dashboard Widgets
You’ll simulate a dashboard loading scenario where some parts can load in parallel:
📝 Instructions
1️⃣ Keep the loginUser(username, password) function from before (user login).
2️⃣ Create three new async functions that return Promises:
loadWidgetA() → takes 1–3 seconds, resolves with "📊 Widget A loaded!"
loadWidgetB() → takes 2–4 seconds, resolves with "📈 Widget B loaded!"
loadWidgetC() → takes 1–2 seconds, resolves with "📉 Widget C loaded!"

Each widget should have a 10–20% chance of failure (reject).

3️⃣ Create an async function loadDashboardWidgets() that uses Promise.all() to load all widgets in parallel.
If all succeed, print each widget message.
If any fail, print the error message.

4️⃣ Inside the main async function runAppAdvanced():
Wait for loginUser() first.
Then call loadDashboardWidgets().
Finish with "✅ Dashboard fully ready!" if everything succeeds.
*/

// function loadWidgetA(username, password) {
//   const time = Math.ceil(Math.random() * 3) * 1000;
//   const chances = Math.random() > 0.2;

//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (chances && username && password) {
//         resolve("📊 Widget A loaded!");
//       } else {
//         reject("❌ Something A wrong!");
//       }
//     }, time)
//   );
// }

// function loadWidgetB(username, password) {
//   function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1 + min) * 1000);
//   }
//   const time = randomNumber(2, 4);

//   const chances = Math.random() > 0.2;

//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (chances && username && password) {
//         resolve("📊 Widget B loaded!");
//       } else {
//         reject("❌ Something B wrong!");
//       }
//     }, time)
//   );
// }

// function loadWidgetC(username, password) {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chances = Math.random() > 0.2;

//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (chances && username && password) {
//         resolve("📊 Widget C loaded!");
//       } else {
//         reject("❌ Something C wrong!");
//       }
//     }, time)
//   );
// }

// async function loadDashboardWidgets() {
//   try {
//     const results = await Promise.all([
//       loadWidgetA("usernameA", "passwordA"),
//       loadWidgetB("usernameB", "passwordB"),
//       loadWidgetC("usernameC", "passwordC"),
//     ]);
//     results.forEach((msg) => console.log(msg));
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("✅ Dashboard fully ready!");
// }
// loadDashboardWidgets();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - User Login & Dashboard Loading Simulation
You’ll create three async functions that simulate a small login process using async/await.

🧠 Instructions:
1️⃣ loginUser()
Takes a username and password.
Waits 1–2 seconds (setTimeout).
Has a random 20% chance to fail (reject).
If successful → resolves with "👤 User logged in!".

2️⃣ fetchUserData()
Waits 2–3 seconds.
Resolves with "📦 User data loaded!".

3️⃣ displayDashboard()
Waits 1–2 seconds.
Resolves with "📊 Dashboard displayed!".

4️⃣ runApp()
Uses await to run all steps in order.
Wraps everything in try...catch to handle login failure.
Logs "✅ All systems ready!" at the end.
*/

// function loginUser(username, password) {
//   const time = Math.ceil(Math.random() * 2) * 1000;
//   const chanceFailure = Math.random() > 0.2;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (chanceFailure && username && password) {
//         resolve("👤 User logged in!");
//       } else {
//         reject("❌ Something wrong!");
//       }
//     }, time);
//   });
// }

// function fetchUserData() {
//   function timeFunction(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
//   }
//   const time = timeFunction(2, 3);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("📦 User data loaded!");
//     }, time);
//   });
// }

// function displayDashboard() {
//   const time = Math.ceil(Math.random() * 2) * 1000;

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("📊 Dashboard displayed!");
//     }, time);
//   });
// }

// async function runApp() {
//   try {
//     const waitUser = await loginUser("username", "password");
//     console.log(waitUser);

//     const fetchData = await fetchUserData();
//     console.log(fetchData);

//     const awaitDisplay = await displayDashboard();
//     console.log(awaitDisplay);
//   } catch (error) {
//     console.log(error);
//   }
// }
// runApp();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 - Simulate a coffee-making process
1 - Create three functions that return Promises:
- heatWater() (takes 2 seconds)
- brewCoffee() (takes 3 seconds)
- serveCoffee() (takes 1 second)

2 - Use async / await to run them in sequence.

3 - Log messages showing each step like “☕ Brewing coffee...”, “🔥 Water heated!”, etc.
*/

// function heatWater() {
//   const time = Math.floor(Math.random() + 2) * 1000;
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("🔥 Water heated!"), time);
//   });
// }

// function brewCoffee() {
//   const time = Math.floor(Math.random() + 3) * 1000;
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("💨 Brewing coffee..."), time);
//   });
// }

// function serveCoffee() {
//   const time = Math.floor(Math.random() + 1) * 1000;
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("☕ Served coffee"), time);
//   });
// }

// async function start() {
//   const waterHated = await heatWater();
//   console.log(waterHated);

//   const brewingCoffee = await brewCoffee();
//   console.log(brewingCoffee);

//   const servedCoffee = await serveCoffee();
//   console.log(servedCoffee);

//   console.log("✅ Coffee is ready! Enjoy!");
// }
// start();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
