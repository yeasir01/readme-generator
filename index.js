const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Project Description?",
        name: "description"
    },
    {
        type: "input",
        message: "table of contents",
        name: "tableOfContents"
    }
]).then(data => {
    writeToFile(data);
});

function writeToFile(data) {
    
    var filename = data.title.toLowerCase().split(' ').join('') + "-README.md";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Readme successfully generated!");
    });
}

function init() {
  
}

init();