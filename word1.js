// dependency for inquirer npm pack
var Letter = require('./letter1.js');

// constructor function used to create programmers objects
function Word(wordtoGuess) {
  this.lettersArray =  wordtoGuess.split("").map(function(char){
    return new Letter(char);
  });

}

//prototype to obtain solution, loop thru letters, print this.char
//prototype to print word as its guessed- showChar
//proto check user guess correctly (letter isguessed)
//proto to find win, this  

module.exports = Word;