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
var _Decorator_object;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorator = exports.Component = void 0;
class Component {
    method() {
        return "Component class";
    }
}
exports.Component = Component;
class Decorator {
    constructor(object) {
        _Decorator_object.set(this, void 0);
        __classPrivateFieldSet(this, _Decorator_object, object, "f");
    }
    method() {
        return `Decorator class (${__classPrivateFieldGet(this, _Decorator_object, "f").method()})`;
    }
}
exports.Decorator = Decorator;
_Decorator_object = new WeakMap();
