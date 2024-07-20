// Define a base class Shape to represent a generic shape with a color property
class Shape {
  // Constructor for the Shape class to initialize the color property
  constructor(color) {
    this.color = color;
  }

  // Abstract method render() that must be implemented by child classes
  render() {
    throw new Error("Method render() must be implemented");
  }
}

// Define a Circle class that extends the Shape class
class Circle extends Shape {
  // Implement the render method for a circle shape with specific SVG attributes
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {
  // Implement the render method for a triangle shape with specific SVG attributes
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Define a Square class that extends the Shape class
class Square extends Shape {
  // Implement the render method for a square shape with specific SVG attributes
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// Export the Circle, Triangle, and Square classes for external use
module.exports = { Circle, Triangle, Square };
