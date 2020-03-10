const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const MarkDown = require("./utils/generateMarkdown.js");

console.log('\x1b[36m%s\x1b[0m', 'WELCOME TO THE CLI README GENERATOR. PLEASE ANSWER THE FOLLOWING QUESTIONS TO GENERATE A CUSTOM README FILE')

inquirer.prompt([{
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like to name the project's directory?",
        name: "fileName"
    },
    {
        type: "input",
        message: "Project description?",
        name: "description"
    },
    {
        type: "input",
        message: "Table of contents",
        name: "tableOfContents"
    }
]).then(data => {
    writeToFile(data);
    MarkDown(data);
});

function writeToFile(data) {

    let project = data.fileName;
    let dir = `./${project}`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log(`a new directory called "${project}" was created...`)
    } else {
        console.log(`files in the exsiting project "${project}" were successfully overwritten...`);
    }

    fs.writeFile(`${dir}/README.md`, MarkDown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("readme file successfully generated!");
    });
}

function init() {

}

init();