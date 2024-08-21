function hello() {
  console.log("inside hello");
  console.log("Hello");
}

function demo() {
  console.log("Inside demo func");
  hello();
}

console.log("HI");
demo();

console.log("bye bye");
