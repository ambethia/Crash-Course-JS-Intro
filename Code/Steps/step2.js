var MIN = 0;
var MAX = 1000;

var startGame = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game').style.display = 'block';
}

var resetGame = function() {
  document.getElementById('min').textContent = MIN;
  document.getElementById('max').textContent = MAX;
  document.getElementById('tries').textContent = Math.round(Math.log(MAX) / Math.log(2));
}

var main = function() {
  document.getElementById('ok').addEventListener('click', startGame);
  resetGame();
}

document.addEventListener('DOMContentLoaded', main);
