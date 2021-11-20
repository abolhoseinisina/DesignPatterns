"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteClassB = exports.ConcreteClassA = void 0;
class AbstractClass {
    stepOne() {
    }
    stepThree() {
        console.log('step three from abstract class');
    }
    templateMethod() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }
}
class ConcreteClassA extends AbstractClass {
    stepTwo() {
        console.log('step two from concrete class A');
    }
}
exports.ConcreteClassA = ConcreteClassA;
class ConcreteClassB extends AbstractClass {
    stepOne() {
        console.log('step one from concrete class B');
    }
    stepTwo() {
        console.log('step two from concrete class B');
    }
    stepThree() {
        console.log('step three from concrete class B');
    }
}
exports.ConcreteClassB = ConcreteClassB;
