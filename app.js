document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const playerDisplay = document.querySelector('#player');

  let currentPlayer = 'playerX'

  squares.forEach((square) => {
    square.addEventListener('click',clickOutCome);
  })

  function clickOutCome(e) {
    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);
    playerDisplay.innerHTML = currentPlayer;

    if(currentPlayer === 'playerX') {
      squares[index].classList.add('playerX');
      currentPlayer = 'playerO';
    } else {
      currentPlayer = 'playerX';
      squares[index].classList.add('playerO');
    }
  }
})