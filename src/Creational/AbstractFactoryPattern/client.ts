import ProductFactory from "./ProductFactory";

let product = ProductFactory.getProduct("Brown Table");
console.log(`${product.name} is created.`);