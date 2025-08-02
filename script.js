const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const carta = document.getElementById("carta");
const selo = document.querySelector(".selo");

selo.addEventListener("click", (e) => {
  e.stopPropagation();
  envelope.classList.add("aberto");
});
// Cria o container das frases
const loveContainer = document.createElement('div');
loveContainer.classList.add('love-container');
document.body.appendChild(loveContainer);

function criarLove() {
  const love = document.createElement('div');
  love.classList.add('love-text');
  love.textContent = 'Eu te amo';

  // Define posição horizontal aleatória dentro da tela
  love.style.left = Math.random() * 100 + 'vw';

  // Define tamanho aleatório entre 14px e 28px
  love.style.fontSize = (14 + Math.random() * 14) + 'px';

  // Define duração da queda entre 5 e 12 segundos
  love.style.animationDuration = (5 + Math.random() * 7) + 's';

  // Adiciona ao container
  loveContainer.appendChild(love);

  // Remove o elemento após a animação terminar (pra não acumular)
  love.addEventListener('animationend', () => {
    love.remove();
  });
}

// Cria várias frases em intervalos regulares
setInterval(criarLove, 400); // a cada 400ms cria uma frase nova

