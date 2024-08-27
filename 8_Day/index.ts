import { calculateArea,calculatePerimeter } from "./main";

const area_result = calculateArea(5,10)
console.log(`Area:${area_result}`)

const perimeter_result = calculatePerimeter(5,10)
console.log(`Perimeter:${perimeter_result}`)

import { Circle } from "./2nd";

const result = new Circle(12,"Circle", 4.5)
console.log(result)