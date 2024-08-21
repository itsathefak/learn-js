// Call Back hell

h1 = document.querySelector("h1");

function colorChange(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

colorChange("red", 1000, () => {
  colorChange("blue", 1000, () => {
    colorChange("green", 1000);
  });
});
