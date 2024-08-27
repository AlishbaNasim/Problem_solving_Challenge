"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
//make class
class Circle {
    calculateArea() {
        throw new Error("Method not implement");
    }
    constructor(radius, name, area) {
        this.radius = radius;
        this.name = name;
        this.area = area;
    }
}
exports.Circle = Circle;
