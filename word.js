// dependency for inquirer npm pack
var Letter = require('./letter.js');

// constructor function used to create programmers objects
function Word(wordtoGuess) {
  this.lettersArray =  wordtoGuess.split("").map(function(char){
    return new Letter(char);
  });

}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Letter: " + this.name);
};