"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factory_1 = require("./Factory");
let chair = Factory_1.ChairFactory.CreateChair("Black");
console.log(`${chair.name} is created.`);
