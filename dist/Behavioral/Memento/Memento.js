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
var _Originator_state, _CareTaker_originator, _CareTaker_mementos;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareTaker = exports.Originator = void 0;
class Memento {
    constructor(state) {
        this.state = state;
    }
}
class Originator {
    constructor() {
        _Originator_state.set(this, void 0);
        __classPrivateFieldSet(this, _Originator_state, '', "f");
    }
    get state() {
        return __classPrivateFieldGet(this, _Originator_state, "f");
    }
    set state(state) {
        __classPrivateFieldSet(this, _Originator_state, state, "f");
        console.log(`Originator: originator state changed to ${__classPrivateFieldGet(this, _Originator_state, "f")}`);
    }
    get memento() {
        console.log('Originator: Providing memento of state to caretaker.');
        return new Memento(__classPrivateFieldGet(this, _Originator_state, "f"));
    }
    set memento(value) {
        __classPrivateFieldSet(this, _Originator_state, value.state, "f");
        console.log(`Originator: state restore from the memento ${__classPrivateFieldGet(this, _Originator_state, "f")}`);
    }
}
exports.Originator = Originator;
_Originator_state = new WeakMap();
class CareTaker {
    constructor(originator) {
        _CareTaker_originator.set(this, void 0);
        _CareTaker_mementos.set(this, void 0);
        __classPrivateFieldSet(this, _CareTaker_originator, originator, "f");
        __classPrivateFieldSet(this, _CareTaker_mementos, [], "f");
    }
    create() {
        console.log(`CareTaker: getting a copy of originator current state.`);
        const memento = new Memento(__classPrivateFieldGet(this, _CareTaker_originator, "f").state);
        __classPrivateFieldGet(this, _CareTaker_mementos, "f").push(memento);
    }
    restore(index) {
        console.log(`CareTaker: restoring originator state from mementos`);
        __classPrivateFieldGet(this, _CareTaker_originator, "f").memento = __classPrivateFieldGet(this, _CareTaker_mementos, "f")[index];
    }
}
exports.CareTaker = CareTaker;
_CareTaker_originator = new WeakMap(), _CareTaker_mementos = new WeakMap();
