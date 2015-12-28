var MIN = 1;
var MAX = 1000;

var lower = MIN;
var upper = MAX;
var guess = null;
var tries = 0;

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

var guessLower = function() {
  upper = guess - 1;
  updateGame();
}

var guessHigher = function() {
  lower = guess + 1;
  updateGame();
}

var updateGame = function() {
  guess = Math.floor((upper + lower) / 2);
  tries++;
  document.getElementById('guess').textContent = guess;
}

var resetGame = function() {
  lower = MIN;
  upper = MAX;
  tries = 0;
  document.getElementById('min').textContent = MIN;
  document.getElementById('max').textContent = MAX;
  document.getElementById('tries').textContent = Math.round(Math.log(MAX) / Math.log(2));
}

var main = function() {
  document.getElementById('ok').addEventListener('click', startGame);
  document.getElementById('yes').addEventListener('click', endGame);
  document.getElementById('lower').addEventListener('click', guessLower);
  document.getElementById('higher').addEventListener('click', guessHigher);
  
  resetGame();
}

document.addEventListener('DOMContentLoaded', main);