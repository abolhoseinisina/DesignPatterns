import { ChairFactory } from "./Factory"

let chair = ChairFactory.CreateChair("Black");
console.log(`${chair.name} is created.`)