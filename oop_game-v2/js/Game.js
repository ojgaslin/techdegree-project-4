/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [{}, {}, {}, {}, {}];
      this.activePhrase = 'null';
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
      var phrases = ["Looks like we have got another mystery on our hands", "Would you do it for a Scooby Snack", "And I would have gotten away with it too if it were not for those meddling kids", "The best time to wear a striped sweater is all the time", "We do not need television not as long as we have our imagination" ];
      return phrases;
    }
    //phrases = createPhrases();
 }
