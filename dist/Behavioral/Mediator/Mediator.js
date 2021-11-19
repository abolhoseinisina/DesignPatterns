"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mediator = void 0;
class Mediator {
    constructor() {
        this.object1 = new Object1();
        this.object2 = new Object2();
    }
    object1Method() {
        this.object1.method();
    }
    object2Method() {
        this.object2.method();
    }
}
exports.Mediator = Mediator;
class Object1 {
    method() {
        console.log("object 1 method is invoked");
    }
}
class Object2 {
    method() {
        console.log("object 2 method is invoked");
    }
}
