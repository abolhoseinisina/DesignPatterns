export interface IVisitor {
    visit(part: Part): void
}

interface IVisitable {
    accept(visitor: IVisitor): void,
}

export class Part implements IVisitable {
    name: string;
    value: number;
    parts: Set<Part>;

    constructor(name: string, value: number, parent?: Part) {
        this.name = name;
        this.value = value;
        this.parts = new Set();
        if (parent) {
            parent.parts.add(this);
        }
    }

    accept(visitor: IVisitor): void {
        this.parts.forEach((part) => {
            part.accept(visitor);
        });
        visitor.visit(this);
    }
}