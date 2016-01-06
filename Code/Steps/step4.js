var MIN = 0;
var MAX = 1000;

var lower;
var upper;
var guess;
var tries;

var startGame = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  updateGame();
}

var endGame = function() {
  alert('I got it in only ' + tries + ' tries!');
  document.getElementById('game').style.display = 'none';
  document.getElementById('intro').style.display = 'block';
  resetGame();
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

var guessLower = function() {
  upper = guess - 1;
  updateGame();
}

var updateGame = function() {
  guess = Math.floor((upper + lower) / 2);
  tries++;
  document.getElementById('guess').textContent = guess;
}

var main = function() {
  document.getElementById('ok').addEventListener('click', startGame);
  document.getElementById('higher').addEventListener('click', guessHigher);
  document.getElementById('lower').addEventListener('click', guessLower);
  document.getElementById('yes').addEventListener('click', endGame);
  resetGame();
}

document.addEventListener('DOMContentLoaded', main);
