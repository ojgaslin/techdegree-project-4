/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
	constructor() {
		//used to track the number of missed guesses by the player
		this.missed = 0;
		//phrases property here calls create phrases method
		this.phrases = this.createPhrases();
		//phrase object that is currently being played
		this.activePhrase = 'null';
	}
	/**
	 * Selects random phrase from phrases property
	 * @return {Object} Phrase object chosen to be used
	 */
	//variable randomPhrase created which selects a random phrase
	getRandomPhrase() {
		var randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
		return randomPhrase;
	};
	/**
	 * Creates phrases for use in game
	 * @return {array} An array of phrases that could be used in the game
	 */
	//method create phrases contains variable phrase which holds the arrays each with new Phrase object
	createPhrases() {
		var phrase = [new Phrase("Looks like we got another mystery on our hands"),
					  new Phrase("Would you do it for a Scooby Snack"),
					  new Phrase("What would you do for a Klondike bar"),
					  new Phrase("The best time to wear a striped sweater is all the time"),
					  new Phrase("No soup for you")];
		//var phrase = [];
		//phrase.push(new Phrase("Looks like we have got another mystery on our hands"));
		return phrase;
	}
	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
	startGame() {
		//hides start screen overlay on div element
		document.querySelector('#overlay')
			.style.display = 'none';
		//this.activePhrase equal to this.getRandomPhrase to call this method
		this.activePhrase = this.getRandomPhrase();
		//this.activePhrase used again to call method in phrase.js file
		this.activePhrase.addPhraseToDisplay();
	}

	/**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin() {
    console.log(liElements);
      var liElements = document.querySelectorAll('#phrase li');
      var sentinal = true;
		  for(let i = 0; i < liElements.length; i++) {
		    if(!(liElements[i].className == "show letter" || liElements[i].className == "space")) {
		      sentinal = false;
		   }
		}
    console.log("checkforwin is " + sentinal);
     return sentinal;
	};
	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife(letter) {
	     if(this.activePhrase.checkLetter(event.target.textContent) === false && this.missed < 4) {
            this.missed += 1;
            var ol = document.getElementById("scoreboard").firstElementChild;
            ol.removeChild(ol.firstElementChild);
	     } else if(this.activePhrase.checkLetter(letter) === false && this.missed === 4) {
            gameOver(gameWon);
       }

	 };
	// /**
	//* Displays game over message
	//* @param {boolean} gameWon - Whether or not the user won the game
	//*/
	gameOver(gameWon) {

  }
	handleInteraction(letter) {
		console.log(this.activePhrase.checkLetter(letter));
		console.log(this.activePhrase.showMatchedLetter(letter));
    console.log(this.checkForWin());
    console.log(this.removeLife());
	}
}
