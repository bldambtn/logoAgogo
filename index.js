// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Function to prompt the user for input
const promptUser = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your logo:",
      validate: (input) =>
        input.length <= 3 || "You can enter up to 3 characters only.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal):",
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
      message: "Enter the shape color (keyword or hexadecimal):",
    },
  ]);
};

// Function to generate the SVG content based on user input
const generateSVG = ({ text, textColor, shape, shapeColor }) => {
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

  // Construct the SVG content with the selected shape, text, and colors
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
    // Generate the SVG content based on the user input
    const svgContent = generateSVG(answers);
    // Write the SVG content to a file named logo.svg in the examples folder
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
