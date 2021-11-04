"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("./decorator");
let A = (0, decorator_1.Value)(5);
let B = (0, decorator_1.Value)(10);
let C = (0, decorator_1.Value)(2);
let result = (0, decorator_1.Sub)((0, decorator_1.Multiply)((0, decorator_1.Add)(A, B), C), 2);
console.log(result.value);
