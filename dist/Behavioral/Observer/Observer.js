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
var _Subject_Observers, _Observer_id;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.Subject = void 0;
class Subject {
    constructor() {
        _Subject_Observers.set(this, void 0);
        __classPrivateFieldSet(this, _Subject_Observers, new Set(), "f");
    }
    subscribe(observer) {
        __classPrivateFieldGet(this, _Subject_Observers, "f").add(observer);
    }
    unsubscribe(observer) {
        __classPrivateFieldGet(this, _Subject_Observers, "f").delete(observer);
    }
    notify(...args) {
        __classPrivateFieldGet(this, _Subject_Observers, "f").forEach((observer) => {
            observer.notify(args);
        });
    }
}
exports.Subject = Subject;
_Subject_Observers = new WeakMap();
class Observer {
    constructor(observable) {
        _Observer_id.set(this, 0);
        __classPrivateFieldSet(this, _Observer_id, Math.random(), "f");
        observable.subscribe(this);
    }
    notify(...args) {
        args.forEach((item) => {
            console.log(`observer number ${__classPrivateFieldGet(this, _Observer_id, "f")} recieved ${item}`);
        });
    }
}
exports.Observer = Observer;
_Observer_id = new WeakMap();
