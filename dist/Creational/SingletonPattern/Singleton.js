"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor(name) {
        this.name = name;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}
exports.Singleton = Singleton;
