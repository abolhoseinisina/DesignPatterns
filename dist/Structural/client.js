"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("./decorator");
let component = new decorator_1.Component();
let decoratedComponent = new decorator_1.Decorator(component);
console.log(decoratedComponent.method());
