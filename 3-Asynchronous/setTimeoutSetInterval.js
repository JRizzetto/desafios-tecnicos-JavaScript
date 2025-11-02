/* Exercise 4 “Factory Production Line”
You’ll simulate a small production process that happens step-by-step using setTimeout and setInterval.
🧩 Your task:

Print:
"🏭 Starting production line..."
After 2 seconds, print:
"⚙️ Machines warming up..."
After the warm-up, start an interval that logs these steps every 1 second:
"🔩 Assembling parts..."
"🧰 Quality checking..."
"📦 Packaging product..."
When the last step is done:
Stop the interval
Print "✅ Production complete!"
Then, after 1 more second, print:
"🚚 Product shipped!"
*/

function factoryProduction() {
  console.log("🏭 Starting production line...");

  let count = 0;

  const messages = [
    "🔩 Assembling parts...",
    "🧰 Quality checking...",
    "📦 Packaging product...",
  ];

  setTimeout(() => {
    console.log("⚙️ Machines warming up...");
    const countMessages = setInterval(() => {
      count < messages.length ? console.log(messages[count]) : "";

      if (count === messages.length - 1) {
        console.log("✅ Production complete!");
        clearInterval(countMessages);

        setTimeout(() => {
          console.log("🚚 Product shipped!");
        }, 1000);
      }
      count++;
    }, 1000);
  }, 2000);
}

factoryProduction();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 3 - “Car Wash Simulation”
Create a program that simulates a car wash process:
1 - When the program starts, print:
"🚗 Car entered the wash station."
2 - After 2 seconds, print:
"💦 Washing car..."
3 - Then, every 1.5 seconds, print each step:
"🧼 Applying soap..."
"🫧 Rinsing car..."
"💨 Drying car..."
4 - After all steps are done, print:
"✅ Car wash complete!"
and make sure the interval stops automatically.
*/

// function carWash() {
//   console.log("🚗 Car entered the wash station.");

//   setTimeout(() => {
//     console.log("💦 Washing car...");

//     let count = 0;

//     const messages = [
//       "🧼 Applying soap...",
//       "🫧 Rinsing car...",
//       "💨 Drying car...",
//     ];

//     const washingCar = setInterval(() => {
//       count <= 2 ? console.log(messages[count]) : "";

//       if (count === 2) {
//         console.log("✅ Car wash complete!");
//         clearInterval(washingCar);
//       }

//       count++;
//     }, 1500);
//   }, 2000);
// }
// carWash();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 2 - “Coffee Machine Simulation”
Create a small simulation that does this:
When the program starts, print
"☕ Starting coffee machine...".

After 2 seconds, print
"✅ Water heated!".

Then start a setInterval that prints every 1 second:
"Brewing coffee... step X",
where X goes from 1 to 5.

After step 5, stop the interval and print
"☕ Coffee ready! Enjoy your drink!".

*/

// function coffeeMachine() {
//   console.log("☕ Starting coffee machine...");

//   setTimeout(() => {
//     console.log("✅ Water heated!");

//     let step = 1;

//     const print = setInterval(() => {
//       console.log(`Brewing coffee... step ${step}`);

//       if (step === 5) {
//         console.log("☕ Coffee ready! Enjoy your drink!");
//         clearInterval(print);
//       }

//       step++;
//     }, 1000);
//   }, 2000);
// }

// coffeeMachine();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* Exercise 1 – Countdown Timer
Goal:
Create a countdown from 5 to 0 using setInterval.
When it reaches 0, show "Time’s up!" and stop the interval.
📘 Steps:
1️⃣ Create a variable count = 5;
2️⃣ Start an interval that logs the current count every second
3️⃣ Decrease count by 1 each time
4️⃣ When count reaches 0:

log "Time’s up!"

stop the interval using clearInterval()
*/

// console.log("Starting system...");

// setTimeout(() => {
//   console.log("✅ System initialized!");

//   let count = 5;

//   const intervalId = setInterval(() => {
//     console.log(`count: ${count}`);
//     count--;

//     if (count <= 0) {
//       clearInterval(intervalId);
//       console.log("✅ Connection stable!");
//     }
//   }, 1000);
// }, 2000);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
