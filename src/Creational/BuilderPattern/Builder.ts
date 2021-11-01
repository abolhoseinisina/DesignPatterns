class Product {
    parts: string[] = [];
}

interface IBuiler {
    buildPartA(): this;
    buildPartB(): this;
    buildPartC(): this;
    getParts(): Product;
}

class Builder implements IBuiler {
    product: Product;
    
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

export default class Director {
    static Construct() {
        return new Builder().buildPartA().buildPartB().buildPartC().getParts();
    }
}