//CLI is going to link everything together based from command line (prompts and tasks)
const inquirer = require('inquirer');
const fs = require('fs');
const makeLogo = require('./output/makeLogo.js')

const questions = [
    {
        name: "shape",
        type: "input",
        message: "choose between one of these three shapes: circle, square, or triangle:",
    },
    {
        name: "shapeColor",
        type: "input",
        message: "enter a shape color (type color keyword or hex code)"
    },
    {
        name: "text",
        type: "input",
        message: "enter up to five characters for text: "
    },
    {
        name: "textColor",
        type: "input",
        message: "enter a text color (type color keyword or hex code)"
    },    
];

//fs write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Generated logo.svg")
    })
}

//handle answers
const handleAnswers = (answers) => {
    if (answers.text.length > 5) {
        console.log("Text must be 5 characters at most");
        init();
    } 
    else {
        writeToFile('logo.svg', makeLogo(answers))
    }
}

function init() {
    inquirer
    .prompt(questions).then(handleAnswers);
}

init();