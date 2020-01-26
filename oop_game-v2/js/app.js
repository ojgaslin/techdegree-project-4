/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

window.onload = function(){
  let game = 'null';
  document.getElementById('btn__reset').addEventListener('click', function() {
    let game = new Game();
    game.startGame();
});
}
