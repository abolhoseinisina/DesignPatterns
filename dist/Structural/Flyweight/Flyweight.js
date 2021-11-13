"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = exports.FlyweightFactory = void 0;
class Flyweight {
    constructor(code) {
        this.code = code;
    }
}
class FlyweightFactory {
    static getFlyweight(code) {
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code);
        }
        return FlyweightFactory.flyweights[code];
    }
    static getCount() {
        return Object.keys(FlyweightFactory.flyweights).length;
    }
}
exports.FlyweightFactory = FlyweightFactory;
FlyweightFactory.flyweights = {};
class AppContext {
    constructor(codes) {
        this.codes = [];
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i));
        }
    }
    output() {
        let result = '';
        this.codes.forEach((c) => {
            result = result + String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
        });
        return result;
    }
}
exports.AppContext = AppContext;
