const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js");

console.log('\x1b[36m%s\x1b[0m', 'WELCOME TO THE CLI README GENERATOR APP. PLEASE ANSWER THE FOLLOWING QUESTIONS TO GENERATE A CUSTOM README FILE')

inquirer.prompt([{
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
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
        message: "Installation instructions?",
        name: "install"
    },
    {
        type: "list",
        message: "Select a license type",
        name: "license",
        choices: ["MIT License", "Boost Software License 1.0", "The Unlicense", "GNU AGPLv3", "GNU GPLv3,GNU LGPLv3", "Mozilla Public License 2.00", "Apache License 2.0"]
    }
])
.then(data => {
    writeToFile(data);
    markDown(data);
});

function writeToFile(data) {

    let project = data.fileName;
    let dir = `./${project}`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log(`✔️  a new directory called "${project}" was created...`)
    } else {
        console.log(`✔️  files in the exsiting project "${project}" were successfully overwritten...`);
    }

    fs.writeFile(`${dir}/README.md`, markDown(data), function (err) {
        if (err) {
            return console.log("❌  " + err);
        }
        console.log("✔️  a readme file was successfully generated!");
    });
}

function init() {

}

init();