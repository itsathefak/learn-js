// Call Back hell

h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      response("Colour Changed");
    }, delay);
  });
}

colorChange("red", 1000)
  .then(() => {
    console.log(" Redcolor Changed !");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("Blue color changed");
    return colorChange("green", 1000);
  })
  .then(() => {
    console.log("Green color changed");
    return colorChange("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color changed");
    return colorChange("pink", 1000);
  });

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

// function savetoDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Data was stored !");
//     } else {
//       reject("Data was not stored");
//     }
//   });
// }

// savetoDB("Athef")
//   .then((result) => {
//     console.log("Data 1 was saved");
//     console.log("Result of promise :", result);
//     return savetoDB("Pandu");
//   })
//   .then((result) => {
//     console.log("Data 2 was saved");
//     console.log("Result of promise :", result);
//     return savetoDB("Baby R");
//   })
//   .then((result) => {
//     console.log("Data 3 was saved");
//     console.log("Result of promise :", result);
//   })
//   .catch((error) => {
//     console.log("Promise was Rejected");
//     console.log("error of promise :", error);
//   });
