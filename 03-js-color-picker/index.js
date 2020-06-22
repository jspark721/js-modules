const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   //get random number between 0 - 3 (from the aray)
//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
//   console.log(randomNumber);
// });

// function getRandomNumber() {
//   return Math.random();
// }

btn.addEventListener("click", function () {
  let hexColor = " #";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
