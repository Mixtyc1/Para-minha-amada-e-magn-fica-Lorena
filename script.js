const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const carta = document.getElementById("carta");
const selo = document.querySelector(".selo");

selo.addEventListener("click", (e) => {
  e.stopPropagation();
  envelope.classList.add("aberto");
});
