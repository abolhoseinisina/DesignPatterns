"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prototype_1 = require("./Prototype");
let object = new Prototype_1.MyClass("test class", [1, 2, 3, 4]);
let clonedObject = object.clone(Prototype_1.CloneType.deep);
clonedObject.array[0] = 100;
console.log(object.array);
console.log(clonedObject.array);
