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
