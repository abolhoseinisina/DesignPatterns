"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Abstraction_implementer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplemenetationB = exports.ImplemenetationA = exports.Abstraction = void 0;
class Abstraction {
    constructor(implementer) {
        _Abstraction_implementer.set(this, void 0);
        __classPrivateFieldSet(this, _Abstraction_implementer, implementer, "f");
    }
    method(value) {
        __classPrivateFieldGet(this, _Abstraction_implementer, "f").method(value);
    }
}
exports.Abstraction = Abstraction;
_Abstraction_implementer = new WeakMap();
// export class AbstractionB implements IAbstaction {
//     #implementer: IImplementation;
//     constructor(implementer: IImplementation) {
//         this.#implementer = implementer;
//     }
//     method(value: string[]): void {
//         this.#implementer.method(value);
//     }
// }
class ImplemenetationA {
    method(value) {
        console.log(value);
    }
}
exports.ImplemenetationA = ImplemenetationA;
class ImplemenetationB {
    method(value) {
        value.forEach((item) => console.log(item));
    }
}
exports.ImplemenetationB = ImplemenetationB;
