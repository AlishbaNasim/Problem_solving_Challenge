import { Shape } from "./1st";

//make class
export class Circle implements Shape {
    name:string
    area:number
    radius:number
    calculateArea(): void {
        throw new Error("Method not implement")
    }
    constructor(radius:number,name:string,area:number){
        this.radius=radius
        this.name= name
        this.area = area
    }

}