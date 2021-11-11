"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubSystemA {
    method() {
        console.log("subsytem A method call.");
    }
}
class SubSystemB {
    method() {
        console.log("subsytem B method call.");
    }
}
class SubSystemC {
    method() {
        console.log("subsytem C method call.");
    }
}
class Facade {
    constructor() {
    }
    static GetInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Facade();
        return this.instance;
    }
    SubSystemA() {
        new SubSystemA().method();
    }
    SubSystemB() {
        new SubSystemB().method();
    }
    SubSystemC() {
        new SubSystemC().method();
    }
}
exports.default = Facade;
