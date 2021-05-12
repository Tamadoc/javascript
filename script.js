let cross = true;
let gameOver = false;

function set(square) {
  if (square.innerHTML === "" && !gameOver) {
    var turn;
    if (cross) {
      turn = "X";
    } else {
      turn = "O";
    }
    square.innerHTML = turn;
    cross = !cross;
  } 

  checkWinState();
}

function checkWinState() {
  let topLeft = document.getElementById('tl').innerHTML;
  let topMiddle = document.getElementById('tm').innerHTML;
  let topRight = document.getElementById('tr').innerHTML;

  let middleLeft = document.getElementById('ml').innerHTML;
  let middleMiddle = document.getElementById('mm').innerHTML;
  let middleRight = document.getElementById('mr').innerHTML;

  let bottomLeft = document.getElementById('bl').innerHTML;
  let bottomMiddle = document.getElementById('bm').innerHTML;
  let bottomRight = document.getElementById('br').innerHTML;
  let winner = "";

  if ( topLeft != "" && topMiddle != "" && topRight != "" 
    && middleLeft != "" && middleMiddle != "" && middleRight != "" 
    && bottomLeft  != "" && bottomMiddle  != "" && bottomRight != ""
    ) {
    winner = "no one"
  }
  
  if ( topLeft == topMiddle && topMiddle == topRight && topRight != ""
    || middleLeft == middleMiddle && middleMiddle == middleRight && middleRight != ""
    || bottomLeft == bottomMiddle && bottomMiddle == bottomRight && bottomRight != ""
    || topLeft == middleLeft && middleLeft == bottomLeft && bottomLeft != ""
    || topMiddle == middleMiddle && middleMiddle == bottomMiddle && bottomMiddle != ""
    || topRight == middleRight && middleRight == bottomRight && bottomRight != ""
    || topLeft == middleMiddle && middleMiddle == bottomRight && bottomRight != ""
    || topRight == middleMiddle && middleMiddle == bottomLeft && bottomLeft != ""
    ) {
    if (cross) {
      winner = "O";
    } else {
      winner = "X";
    }
  }

  if (winner != "") {
    gameOver = true;
    let element = document.getElementById("id01");

    element.innerHTML = "Game over: " +  winner + " wins";
    element.style.color = "red"
    document.getElementById('replay').style.display = "inline-block";
  }
}

function reset() {
  location.reload();
}


