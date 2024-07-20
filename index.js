// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Set value for color input to validate against
const colorRegex = /^#[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/;

// Function to prompt the user for input
const promptUser = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your logo:",
      validate: (input) => {
        if (input.length >= 1 && input.length <= 3) {
          return true;
        } else {
          return "Please enter text with 1 to 3 characters.";
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Enter the text color by keyword or hexadecimal number:",
      validate: (input) => {
        if (!input) {
          return "Text color is required.";
        }
        if (!colorRegex.test(input)) {
          return "Please enter a valid color keyword or hexadecimal code (e.g., '#ff0000' or 'red').";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for your logo:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Enter the shape color by keyword or hexadecimal number:",
      validate: (input) => {
        if (!input) {
          return "Shape color is required.";
        }
        if (!colorRegex.test(input)) {
          return "Please enter a valid color keyword or hexadecimal code (e.g., '#ff0000' or 'blue').";
        }
        return true;
      },
    },
  ]);
};

// Function to generate the Logo based on user input
const generateLogo = ({ text, textColor, shape, shapeColor }) => {
  let shapeElement;
  // Determine the shape element based on user selection
  switch (shape) {
    case "circle":
      shapeElement = new Circle(shapeColor).render();
      break;
    case "triangle":
      shapeElement = new Triangle(shapeColor).render();
      break;
    case "square":
      shapeElement = new Square(shapeColor).render();
      break;
  }

  // Construct the Logo with the selected shape, text, and colors
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
};

// Main function to run the application
const run = async () => {
  try {
    // Prompt the user for input and wait for the responses
    const answers = await promptUser();
    // Generate the Logo based on the user input
    const svgContent = generateLogo(answers);
    // Write the Logo to a file named logo.svg in the examples folder
    fs.writeFileSync("examples/logo.svg", svgContent);
    // Print a success message
    console.log("Generated logo.svg");
  } catch (error) {
    // Handle any errors that occur during the execution
    console.error("Error generating logo:", error);
  }
};

// Invoke the run function to start the application
run();
