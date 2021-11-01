"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor() {
        this.parts = [];
    }
}
class Builder {
    constructor() {
        this.product = new Product();
    }
    buildPartA() {
        console.log('Building part A');
        this.product.parts.push("Part A");
        return this;
    }
    buildPartB() {
        console.log('Building part B');
        this.product.parts.push("Part B");
        return this;
    }
    buildPartC() {
        console.log('Building part C');
        this.product.parts.push("Part C");
        return this;
    }
    getParts() {
        return this.product;
    }
}
class Director {
    static Construct() {
        return new Builder().buildPartA().buildPartB().buildPartC().getParts();
    }
}
exports.default = Director;
