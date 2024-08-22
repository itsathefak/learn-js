// Call Back hell

// h1 = document.querySelector("h1");

// function colorChange(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// colorChange("red", 1000, () => {
//   colorChange("blue", 1000, () => {
//     colorChange("green", 1000);
//   });
// });

// Setting up promises

// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "Athef Ak",
//   () => {
//     console.log("Your data has been stored");
//     savetoDB(
//       "Hello",
//       () => {
//         console.log("Your data 2 has been stored");
//         savetoDB(
//           "Hi",
//           () => {
//             console.log("Your data 3 has been stored");
//           },
//           () => {
//             console.log("Weak Connection, Data 3 Not stored !");
//           }
//         );
//       },
//       () => {
//         console.log("Weak Connection, Data 2 Not stored !");
//       }
//     );
//   },
//   () => {
//     console.log("Weak Connection, Data Not stored !");
//   }
// );

function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Data was stored !");
    } else {
      reject("Data was not stored");
    }
  });
}

savetoDB("AthefAk");
savetoDB("Pandu");
