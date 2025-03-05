// Pegando elementos da tela
const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');

// Definindo variáveis para o movimento
let playerPositionX = gameArea.clientWidth / 2 - player.offsetWidth / 2; // Posição inicial
let playerSpeed = 5; // Velocidade do movimento

// Função que move o avião
function movePlayer(e) {
    if (e.key === 'ArrowRight') {
        if (playerPositionX + player.offsetWidth < gameArea.clientWidth) {
            playerPositionX += playerSpeed;
        }
    } else if (e.key === 'ArrowLeft') {
        if (playerPositionX > 0) {
            playerPositionX -= playerSpeed;
        }
    }

    // Atualiza a posição do avião
    player.style.left = `${playerPositionX}px`;
}

// Adiciona evento de teclado para movimentar o avião
window.addEventListener('keydown', movePlayer);
