// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
var inquirer = require("inquirer");
var Word = require('./word1.js');

// list of words (array)
// main game function

function mainGame() {
    //function beginGame
        //set guesses remaining
        //get next word
    
    //function word from list of words
        //prompt user to guess ltr
getGuess();
    function getGuess(){


        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "What letter do you choose?"
            }
        ]).then(function(char){
            console.log(JSON.stringify(char, null, '_'));
        });
    }
}
mainGame();

