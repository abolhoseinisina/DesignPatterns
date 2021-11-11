"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composite = exports.Leaf = void 0;
class Leaf {
    constructor(name) {
        this.referenceToParent = undefined;
        this.name = name;
    }
    method() {
        const parent = this.referenceToParent ? this.referenceToParent.name : "none";
        console.log(`<Leaf>\t\tname:${this.name}\tparent:${parent}`);
    }
    detach() {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
        }
    }
}
exports.Leaf = Leaf;
class Composite {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    method() {
        const parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(`<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`);
        this.components.forEach((component) => {
            component.method();
        });
    }
    detach() {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }
    attach(component) {
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }
    delete(component) {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
}
exports.Composite = Composite;
