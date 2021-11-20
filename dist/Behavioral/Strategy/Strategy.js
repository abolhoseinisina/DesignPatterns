"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStrategyC = exports.ConcreteStrategyB = exports.ConcreteStrategyA = exports.Context = void 0;
class Context {
    request(strategy) {
        return new strategy();
    }
}
exports.Context = Context;
class ConcreteStrategyA {
    method() {
        console.log('I am concrete strategy A');
    }
}
exports.ConcreteStrategyA = ConcreteStrategyA;
class ConcreteStrategyB {
    method() {
        console.log('I am concrete strategy B');
    }
}
exports.ConcreteStrategyB = ConcreteStrategyB;
class ConcreteStrategyC {
    method() {
        console.log('I am concrete strategy C');
    }
}
exports.ConcreteStrategyC = ConcreteStrategyC;
