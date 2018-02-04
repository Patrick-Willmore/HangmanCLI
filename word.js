// var letter = require('./letter.js');

const inquirer = require('inquirer');

userprompt();
function userprompt() {
    inquirer.prompt({
            
            name: "userguess",
            type: "input",
            message: "Please input next letter guessed"
            
    })
        .then(function(inquirerResponse){
        userprompt();
            console.log(inquirerResponse);
        });
            // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        //     if (inquirerResponse.confirm) {
        //       console.log("\nWelcome " + inquirerResponse.name);
              
        //     }
        //     else {
        //       console.log("\nThat's okay " + inquirerResponse.name + ", come again when you are more sure.\n");
        //     }
        //   });
    
        // userprompt();