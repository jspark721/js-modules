const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchline-btn");
const newJokeBtn = document.getElementById("joke-btn");
let punchline;

punchlineBtn.addEventListener("click", getPunchLine);
newJokeBtn.addEventListener("click", getJoke);

function getPunchLine() {
  punchlineDiv.innerHTML = punchline;
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke[0].setup;
  punchline = joke[0].punchline;

  punchlineDiv.innerHTML = "";
  punchlineDiv.classList.remove("bubble");

  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

getJoke();
