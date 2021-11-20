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
var _Context_stateHandles, _Context_handle;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class ConcreteStateA {
    toString() {
        console.log('I am Concrete State A');
    }
}
class ConcreteStateB {
    toString() {
        console.log('I am Concrete State B');
    }
}
class ConcreteStateC {
    toString() {
        console.log('I am Concrete State C');
    }
}
class Context {
    constructor() {
        _Context_stateHandles.set(this, void 0);
        _Context_handle.set(this, void 0);
        __classPrivateFieldSet(this, _Context_stateHandles, [
            new ConcreteStateA(),
            new ConcreteStateB(),
            new ConcreteStateC(),
        ], "f");
        __classPrivateFieldSet(this, _Context_handle, undefined, "f");
    }
    request() {
        __classPrivateFieldSet(this, _Context_handle, __classPrivateFieldGet(this, _Context_stateHandles, "f")[Math.floor(Math.random() * 3)], "f");
        return __classPrivateFieldGet(this, _Context_handle, "f").toString();
    }
}
exports.Context = Context;
_Context_stateHandles = new WeakMap(), _Context_handle = new WeakMap();
