let isCross = true;
let gameOver = false;

function set(square) {
  if (!square.innerHTML && !gameOver) {
    let turn = isCross ? "X" : "O";
    square.innerHTML = turn;
    
    checkWinState();
    isCross = !isCross;
  }
}

function checkWinState() {
  const topLeft = document.getElementById('tl').innerHTML;
  const topMiddle = document.getElementById('tm').innerHTML;
  const topRight = document.getElementById('tr').innerHTML;

  const middleLeft = document.getElementById('ml').innerHTML;
  const middleMiddle = document.getElementById('mm').innerHTML;
  const middleRight = document.getElementById('mr').innerHTML;

  const bottomLeft = document.getElementById('bl').innerHTML;
  const bottomMiddle = document.getElementById('bm').innerHTML;
  const bottomRight = document.getElementById('br').innerHTML;
  
  let winner = null;

  if ( topLeft && topMiddle && topRight 
    && middleLeft && middleMiddle && middleRight  
    && bottomLeft && bottomMiddle && bottomRight
    ) {
    winner = "no one"
  }
  
  if ( topLeft == topMiddle && topMiddle == topRight && topRight
    || middleLeft == middleMiddle && middleMiddle == middleRight && middleRight
    || bottomLeft == bottomMiddle && bottomMiddle == bottomRight && bottomRight
    || topLeft == middleLeft && middleLeft == bottomLeft && bottomLeft
    || topMiddle == middleMiddle && middleMiddle == bottomMiddle && bottomMiddle
    || topRight == middleRight && middleRight == bottomRight && bottomRight
    || topLeft == middleMiddle && middleMiddle == bottomRight && bottomRight
    || topRight == middleMiddle && middleMiddle == bottomLeft && bottomLeft
    ) {
    winner = isCross ? "X" : "O";
  }

  if (winner) {
    gameOver = true;
    const element = document.getElementById("id01");
    element.innerHTML = "Game over: " +  winner + " wins";
    element.style.color = "red";

    document.getElementById('replay').style.display = "inline-block";
  }
}

function reset() {
  location.reload();
}