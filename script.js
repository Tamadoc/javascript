let cross = true;

function set(square) {
  if (square.innerHTML === "") {
    var turn;
    if (cross) {
      turn = "X";
    } else {
      turn = "O";
    }
    square.innerHTML = turn;
    cross = !cross;
  }  
}