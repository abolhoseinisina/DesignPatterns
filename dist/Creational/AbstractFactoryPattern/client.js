"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductFactory_1 = require("./ProductFactory");
let product = ProductFactory_1.default.getProduct("Brown Table");
console.log(`${product.name} is created.`);
