// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("../Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    name:"title",
    message:"title of my project"
},
{
    name:"description",
    message:"description of my project"
},
{
    name:"installationInstructions",
    message:"Installation instructions of my project"
},
{ 
    name:"usageInformation",
    message:"usage information of my project"
},
{
    name:"contributionGuidelines",
    message:"Contribution guidelines of my project"

},
{
    name:"testInstructions",
    message:"test instructions of my project"

},
{   type:"list",
    name:"licenseType",
    message:"license type of my project",
    choices:["MIT" ,"Apache 2.0" ,"BSD 3.0","None"]
},
{
    name:"gitHub",
    message:"github username",
},
{
    name:"emailAddress",
    message:"email address",
},

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) console.log(err)
    })

}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then(answer=>{ 
                   var contents = util.generateMarkdown(answer);
                   writeToFile("../README.md",contents)}
    )
}

// Function call to initialize app
init();



// Readme file
// this project is called README creator. It runs on Node.js and does not require a browser.
// It helps software developpers create a readme file in markdown where the user once run the PerformanceNavigationTiming,
// he is asked 9 questions which are title of my project, Installation instructions,usage information, 
// contribution guidelines, test instructions, license type, github username  and email address.

// Once all questions are answered, a README.md file is created that has all these details.

// The program uses 2 Node.js modules, the inquirer module that is used to prompt user 
// with questions and the fs module that creates a README file and  write the users answers in this
// file. One of the questions as seen above is the license type of the program where the user is given
// 3 license types and allowed to choose between them or a fourth of license to be None.

// If a license is choosen, a badge is added to the top of the readme file and if no license,
// of course no badge is added. The readme file as well has a table of contents with a link to 
// every section in the file to make it easier for the user to navigate through the sections
// by clicking on the links in the readme file.