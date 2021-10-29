import ProductFactory from "./ProductFactory";

let product = ProductFactory.getProduct("Black Chair");
console.log(`${product.name} is created.`);