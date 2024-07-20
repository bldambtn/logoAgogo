// Import the Circle, Triangle, and Square classes from the shapes module
const { Circle, Triangle, Square } = require('./shapes');

// Test suite for the Shape classes
describe('Shape classes', () => {
    // Test case for rendering a Circle shape
    test('Circle renders correctly', () => {
        const shape = new Circle('red');
        expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    // Test case for rendering a Triangle shape
    test('Triangle renders correctly', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    // Test case for rendering a Square shape
    test('Square renders correctly', () => {
        const shape = new Square('green');
        expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});
