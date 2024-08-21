setTimeout(() => {
  console.log("My Name is Athef");
}, 2000);

setTimeout(() => {
  console.log("I'm a CS Student");
}, 2000);

console.log("Hello...");

// Js is Single Threaded - You might see JS executes 2 setTimeout at the same time, thats possible cuz settimeout is run by browser (c++) and not JS, JS executes remaining code while browser stores the function in call stack.
