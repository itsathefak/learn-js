// h1 = document.querySelector("h1");

// function colorChange(color, delay) {
//   return new Promise((response, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       response("Colour Changed");
//     }, delay);
//   });
// }

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

async function greet() {
  throw "404";
  return "hello world";
}

let hello = async () => {
  return "hello world 2";
};

greet()
  .then((result) => {
    console.log("Promise was fulfilled", result);
  })
  .catch((error) => {
    console.log("Promise was not fulfilled", error);
  });
