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
       for(let i = 0; i < this.phrase.length; i++){
           var li = document.createElement("li");
           li.innerHTML = this.phrase.charAt(i);
           //let letter = "<li>" + this.phrase.charAt(i) + "</li>";
           console.log(li);

             if(li.innerHTML === " ") {
               li.className = "space";
             } else {
                  li.className = "hide letter " + li.innerHTML;
            }

             document.querySelector('#phrase ul').appendChild(li);
             li.display = 'none';
         }
    }

    checkLetter() {

    }
    showMatchedLetter() {

    }
 }
