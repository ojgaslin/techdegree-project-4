/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
    constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = 'null';

    }
    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
     var randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
     return randomPhrase;
};
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
      var phrase = [new Phrase("Looks like we got another mystery on our hands"), new Phrase("Would you do it for a Scooby Snack"), new Phrase("And I would have gotten away with it too if it were not for those meddling kids"), new Phrase("The best time to wear a striped sweater is all the time"), new Phrase("no soup for you") ];
      //var phrase = [];
      //phrase.push(new Phrase("Looks like we have got another mystery on our hands"));
      return phrase;
    }
    //phrases = createPhrases();
 }
