h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10 + 1);
      if (num > 4) {
        reject("There is an error");
      }
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      response("Colour Changed");
    }, delay);
  });
}

async function demo() {
  try {
    await colorChange("red", 1000);
    await colorChange("green", 1000);
    await colorChange("blue", 1000);
    await colorChange("yellow", 1000);
  } catch (err) {
    console.log("error caught");
  }
  let a = 5;
  console.log(a);
  console.log("new number is", a + 3);
}

// colorChange("red", 1000)
//   .then(() => {
//     console.log(" Redcolor Changed !");
//     return colorChange("blue", 1000);
//   })
//   .then(() => {
//     console.log("Blue color changed");
//     return colorChange("green", 1000);
//   })
//   .then(() => {
//     console.log("Green color changed");
//     return colorChange("yellow", 1000);
//   })
//   .then(() => {
//     console.log("yellow color changed");
//     return colorChange("pink", 1000);
//   });

// async function greet() {
//   throw "404";
//   return "hello world";
// }

// let hello = async () => {
//   return "hello world 2";
// };

// greet()
//   .then((result) => {
//     console.log("Promise was fulfilled", result);
//   })
//   .catch((error) => {
//     console.log("Promise was not fulfilled", error);
//   });
