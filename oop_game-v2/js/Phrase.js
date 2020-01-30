/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
//constructor for phrase class created and 'phrase' passed in representing the phrase the phrase object is representing and the random phrase is changed to all lowercase
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
    /**
* Display phrase on game board
*/
//add phrase to display method loops through the random phrase and the letters and spaces of phrases
//creates li and used '.innerHTML' to insert content for element being accessed by this.phrase.charAt(i), i being the letter or space
    addPhraseToDisplay() {
       for(let i = 0; i < this.phrase.length; i++){
           var li = document.createElement("li");
           li.innerHTML = this.phrase.charAt(i);
           //let letter = "<li>" + this.phrase.charAt(i) + "</li>";
           //console.log(li);
//if/else statment, if li.innerHTML is equal to space, then class name space given
             if(li.innerHTML === " ") {
               li.className = "space";
//else class name is hide letter because it must be a letter if it is not a space, also adding li.innerHTML to add the letter type to the end of the class name
             } else {
                  li.className = "hide letter " + li.innerHTML;
            }
//li element is appended to ul which already exists and has the id phrase
             document.querySelector('#phrase ul').appendChild(li);

         }
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
  checkLetter(letter) {
     if(this.phrase.indexOf(letter) > -1) {
       return true;
     }
     return false;
   }
    /**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
      //variable liElements holds node list array of the li elements and their properties
      var liElements = document.querySelectorAll('#phrase li');
      console.log(liElements);
      //loop iterating through array, i being number of loops
      for(var i = 0; i < liElements.length; i++) {

          if(liElements[i] === letter) {

          } else {

          }
      }
    }
 }
