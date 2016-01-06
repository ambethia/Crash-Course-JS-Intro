var startGame = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game').style.display = 'block';
}

var main = function() {
  document.getElementById('ok').addEventListener('click', startGame);
}

document.addEventListener('DOMContentLoaded', main);
