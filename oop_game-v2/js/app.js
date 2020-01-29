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
    document.querySelectorAll('.key').forEach(item => {
     item.addEventListener('click', event => {
          game.handleInteraction(event.target.textContent);
          //console.log(event.target.textContent);
     })
    })
  //  document.addEventListener('keydown', function(event) {
  //    var key = event.keyCode;
  //    if(key.length === 1) {
  //    const key = event.key;
//    }
//    });

    game.startGame();
});
}
