# logoAgogo

## Description
A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

![Example logo](./Examples/10-oop-homework-demo.png)

![Walkthrough video](./Examples/Walkthrough.gif)

Link to walkthrough: https://drive.google.com/file/d/1eSZwhlWwm-oo9TMj5esMpNoCZNABemGv/view

## Credits

*   Coding Boot Camp. (n.d.). (accessed July 20, 2024) Professional README Guide. Retrieved from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide 

*   npm Inc. (2024). (accessed July, 20 2024). jest. npm. Retrieved from https://www.npmjs.com/package/jest 

*   npm Inc. (2024). (accessed July, 20 2024). inquirer. npm. Retrieved from https://www.npmjs.com/package/inquirer/v/8.2.4

*   Mozilla. (n.d.). (accessed July, 20 2024). Classes. Mozilla Developer Network. Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes 

*   Mozilla. (n.d.). (accessed July, 20 2024). Promise. Mozilla Developer Network. Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

*   Mozilla. (n.d.). (accessed July, 20 2024). RegExp. Mozilla Developer Network. Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

*   Wikipedia contributors. (n.d.). (accessed July, 20 2024). Scalable Vector Graphics. In Wikipedia, The Free Encyclopedia. Retrieved from https://en.wikipedia.org/wiki/SVG

## License
MIT License

Copyright (c) 2024 bldambtn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.