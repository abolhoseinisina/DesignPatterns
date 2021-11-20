"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Part = void 0;
class Part {
    constructor(name, value, parent) {
        this.name = name;
        this.value = value;
        this.parts = new Set();
        if (parent) {
            parent.parts.add(this);
        }
    }
    accept(visitor) {
        this.parts.forEach((part) => {
            part.accept(visitor);
        });
        visitor.visit(this);
    }
}
exports.Part = Part;
