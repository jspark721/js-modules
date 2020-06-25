const openbtn = document.querySelector(".btn");
const closebtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

function openModal() {
  container.classList.toggle("hide");
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
}

function closeModal() {
  container.classList.toggle("hide");
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
}
openbtn.addEventListener("click", openModal);
closebtn.addEventListener("click", closeModal);
