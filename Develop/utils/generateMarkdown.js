// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
  let image = `![This is an image](https://img.shields.io/badge/license-${license.replace(" ","%20")}-brightgreen)`;
  return image;}
  else{return ""}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None"){return ""}
  else{

  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None"){ return ""}
  else{ return license.licenseType}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.licenseType)}



## Description
${data.description}

## Table of Contents
- [Installation instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)


## Installation instructions 
${data.installationInstructions}

## Usage Information
${data.usageInformation}

## Contribution Guidelines
${data.contributionGuidelines}

## License
${data.licenseType}

## Test Instructions
${data.testInstructions}

## Questions
-GitHub username:<br>${data.gitHub}<br>
-GitHub profile<br>
https://github.com/${data.gitHub}<br>
For any questions, please reach me on my email address as below <br>
-Email address<br>
<${data.emailAddress}>

  `;
}

module.exports = {
  generateMarkdown
};