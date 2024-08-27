"use strict";
// Question:*
// Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = exports.calculateArea = void 0;
// *Hint:*
// - Use export to export the functions in the first file.
// - Use named imports to bring the functions into the second file.
// - Ensure that the file paths are correctly specified when importing.
//01:Export calculateArea Function
function calculateArea(width, height) {
    return width * height;
}
exports.calculateArea = calculateArea;
//02:Export calculatePerimeter Function
function calculatePerimeter(width, height) {
    return 2 * (width + height);
}
exports.calculatePerimeter = calculatePerimeter;
