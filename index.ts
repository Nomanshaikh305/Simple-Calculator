#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let loop = true
while(loop){

const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one if the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(chalk.bgGreen(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Substraction") {
    console.log(chalk.bgGreen(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
    console.log(chalk.bgGreen(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
    console.log(chalk.bgGreen(answer.firstNumber / answer.secondNumber));
} else {
    console.log("Please select valid operator")
}

const calculatorMore = await inquirer.prompt({
    type: "confirm",
    name: "more",
    message: "Do you want more Calculations?",
    default: false
}); 

if (!calculatorMore.more){
    loop = false;
    console.log(`\n"The End"`)
}

}
