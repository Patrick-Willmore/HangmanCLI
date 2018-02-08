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

    function getGuess(){


        inquirer.prompt([
            {
                name: "name",
                message: "What letter do you choose?"
            }
        ]).then(function (answers) {
            // initializes the variable newguy to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
            // printInfo method is run to show that the newguy object was successfully created and filled
            newGuy.printInfo();
        });
    }
}


