const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const carta = document.getElementById("carta");

envelope.addEventListener("click", () => {
  flap.style.transform = "rotateX(-180deg)";
  setTimeout(() => {
    carta.style.display = "block";
  }, 1000);
});
