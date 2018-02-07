// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name) {
  this.name = name;
  // this.position = position;
  // this.age = age;
  // this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Letter: " + this.name);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "name",
    message: "What letter do you choose?"
  }
]).then(function(answers) {
  // initializes the variable newguy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
  // printInfo method is run to show that the newguy object was successfully created and filled
  newGuy.printInfo();
});


// var letter = require('./letter.js');

// const inquirer = require('inquirer');

// // userprompt();
// function userprompt() {
//     inquirer.prompt({
            
//             name: "userguess",
//             type: "input",
//             message: "Please input next letter guessed"
            
//     })
//         .then(function(inquirerResponse){
//         // userprompt();
//             console.log(inquirerResponse);
//         });
//     };
            // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        //     if (inquirerResponse.confirm) {
        //       console.log("\nWelcome " + inquirerResponse.name);
              
        //     }
        //     else {
        //       console.log("\nThat's okay " + inquirerResponse.name + ", come again when you are more sure.\n");
        //     }
        //   });
    
        // userprompt();