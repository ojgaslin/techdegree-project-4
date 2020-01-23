/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
    /**
* Display phrase on game board
*/

    addPhraseToDisplay() {

         //    for (i = str.charAt(0); i < str.length, i++) {
         //   if(i = " ") {
         //     li.className = space;
         //   } else {
         //     var ul = document.createElement("ul");
         //     ul.className = "section";
         //     ul.id = "phrase";
         //     var li = document.createElement("li");
         //     li.className = "hide letter";
         //     var letter = document.createTextNode(new Phrase[i]);
         //     li.appendChild(letter);
         //       li.className = space;
         //   }
         // }
         for(let i = 0; i < this.phrase.length; i++){
           console.log(this.phrase.charAt(i));
           let letter = this.phrase.charAt(i)
           letter.style.display = 'none';
             if() {

             }
         }
    }

    checkLetter() {

    }
    showMatchedLetter() {

    }
 }
