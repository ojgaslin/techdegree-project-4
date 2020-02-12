/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//DOM fully loaded before execution
//create game variable equal to nothing
let game = 'null';
window.onload = function() {
	//event listener added on start button
	document.getElementById('btn__reset')
		.addEventListener('click', function() {
			//used game variable to instantiate new Game object
			game = new Game();
			//call methods in game to reset the gameboard and begin game
			game.resetGameboard();
			game.startGame();
		});
	//add click event listener to each item with class key
	//handleInteraction method called passing in event.target/button targeted with attributes
	document.querySelectorAll('.key')
		.forEach(item => {
			item.addEventListener('click', event => {
				game.handleInteraction(event.target);
			})
		})
	//keyup event listener for keyboard
	document.addEventListener('keyup', (event) => {
		document.querySelectorAll('.key')
			.forEach(item => {
				if (event.key.toLowerCase() == item.innerHTML) {
					item.click();
				}
			})
	})
}
