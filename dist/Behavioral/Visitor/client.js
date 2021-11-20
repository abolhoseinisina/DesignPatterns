"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Visitor_1 = require("./Visitor");
const partA = new Visitor_1.Part('A', 101);
const partB = new Visitor_1.Part('B', 201, partA);
const partC = new Visitor_1.Part('C', 202, partA);
const partD = new Visitor_1.Part('D', 301, partB);
class printPartNamesVisitor {
    visit(part) {
        console.log(part.name);
    }
}
partA.accept(new printPartNamesVisitor());
class CalculatePartTotalVisitors {
    constructor() {
        this.totalValue = 0;
    }
    visit(part) {
        this.totalValue += part.value;
        return this.totalValue;
    }
}
let visitor = new CalculatePartTotalVisitors();
partA.accept(visitor);
console.log(visitor.totalValue);
