import { IVisitor, Part } from "./Visitor";

const partA = new Part('A',101);
const partB = new Part('B',201, partA);
const partC = new Part('C',202, partA);
const partD = new Part('D',301, partB);

class printPartNamesVisitor implements IVisitor {
    visit(part: Part): void {
        console.log(part.name);
    }
}

partA.accept(new printPartNamesVisitor());

class CalculatePartTotalVisitors implements IVisitor {
    totalValue = 0;
    visit(part: Part) {
        this.totalValue += part.value;
        return this.totalValue;
    }
}

let visitor = new CalculatePartTotalVisitors()
partA.accept(visitor);
console.log(visitor.totalValue);