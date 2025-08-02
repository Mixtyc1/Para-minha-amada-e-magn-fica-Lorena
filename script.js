const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const carta = document.getElementById("carta");
const selo = document.querySelector(".selo");

selo.addEventListener("click", (e) => {
  e.stopPropagation();
  envelope.classList.add("aberto");
});

// Cria o container das frases "Eu te amo"
const loveContainer = document.createElement('div');
loveContainer.classList.add('love-container');
document.body.appendChild(loveContainer);

function criarLove() {
  const love = document.createElement('div');
  love.classList.add('love-text');
  love.textContent = 'Eu te amo';

  // Posição horizontal aleatória
  love.style.left = Math.random() * 100 + 'vw';

  // Tamanho aleatório entre 14px e 28px
  love.style.fontSize = (14 + Math.random() * 14) + 'px';

  // Duração da queda entre 5 e 12 segundos
  love.style.animationDuration = (5 + Math.random() * 7) + 's';

  loveContainer.appendChild(love);

  // Remove após animação para evitar acumulo
  love.addEventListener('animationend', () => {
    love.remove();
  });
}

// Gera uma nova frase a cada 400ms
setInterval(criarLove, 400);
