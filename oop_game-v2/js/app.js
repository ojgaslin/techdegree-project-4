/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//DOM fully loaded before execution
window.onload = function(){
//create game variable equal to nothing
  let game = 'null';
//event listener added on start button
  document.getElementById('btn__reset').addEventListener('click', function() {
//used game variable to instantiate new Game object and called startGame method on new game object
    let game = new Game();
    game.startGame();
});
}
var keyboardDivParent = document.querySelector("keyrow");
keyboardDivParent.addEventListener("click", findLetterClicked, false );

function findLetterClicked(e) {
  if(e.target !== e.currentTarget) {
    var clickedLetter = e.target.id;
      }
      e.stopPropagation();
}
