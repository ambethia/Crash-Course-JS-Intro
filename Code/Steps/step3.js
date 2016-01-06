var MIN = 0;
var MAX = 1000;

var lower;
var upper;
var guess;

var startGame = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  updateGame();
}

var resetGame = function() {
  lower = MIN;
  upper = MAX;
  guess = 0;
  tries = 0;

  document.getElementById('min').textContent = MIN;
  document.getElementById('max').textContent = MAX;
  document.getElementById('tries').textContent = Math.round(Math.log(MAX) / Math.log(2));
}

var guessHigher = function() {
  lower = guess + 1;
  updateGame();
}

var updateGame = function() {
  guess = Math.floor((upper + lower) / 2);
  document.getElementById('guess').textContent = guess;
}

var main = function() {
  document.getElementById('ok').addEventListener('click', startGame);
  document.getElementById('higher').addEventListener('click', guessHigher);
  resetGame();
}

document.addEventListener('DOMContentLoaded', main);
