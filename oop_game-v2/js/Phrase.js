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
      //var phrase1 = [ l, o, o, k, s, , l, i, k, e, , w, e, , g, o, t, , a, n, o, t, h, e, r, , m, y, s, t, e, r, y, , o, n, , o, u, r, , h, a, n, d, s];
      //var phrase2 = [ w, o, u, l, d, , y, o, u, , d, o, , i, t, , f, o, r, , a, , s, c, o, o, b, y, , s, n, a, c, k];
      //var phrase3 = [a, n, d, , i, w, o, u, l, d, , h, a, v, e, , g, o, t, t, e, n, , a, w, a, y, , w, i, t, h, , i, t, , t, o, o, , i, f, , i, t, ,  w, e, r, e, , n, o, t, , f, o, r, , t, h, o, s, e, ,  m, e, d, d, l, i, n, g, , k, i, d, s];
      //var phrase4 = [];
      //var phrase5 = [];
            for (i = 0; i < new Phrase.length; i++) {
           if(i = " ") {
             li.className = space;
           } else {
             var ul = document.createElement("ul");
             ul.className = "section";
             ul.id = "phrase";
             var li = document.createElement("li");
             li.className = "hide letter";
             var letter = document.createTextNode(array[i]);
             li.appendChild(letter);
               li.className = space;
           }
         }
    }

    checkLetter() {

    }
    showMatchedLetter() {

    }
 }
