"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bridge_1 = require("./Bridge");
const values = ['a', 'b', 'c', 'd'];
let refinedAbstractionA = new Bridge_1.Abstraction(new Bridge_1.ImplemenetationA());
refinedAbstractionA.method(values);
let refinedAbstractionB = new Bridge_1.Abstraction(new Bridge_1.ImplemenetationB());
refinedAbstractionB.method(values);
