let button = document.getElementById("button");
let counter = document.getElementById("counter");
let reset = document.getElementById("reset");
let count = 0;
button.onclick = function () {
  count++;
  counter.innerHTML = `button was clicked ${count} times`;
};
reset.onclick = function () {
  resetCounter();
};

function resetCounter() {
  count = 0;
  counter.innerHTML = `back to zero!`;
}
