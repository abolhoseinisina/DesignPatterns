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
var _a, _DataController_subscribers, _DataController_instance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
class DataController {
    constructor() {
        _DataController_subscribers.set(this, void 0);
        __classPrivateFieldSet(this, _DataController_subscribers, new Set(), "f");
    }
    static getInstance() {
        if (__classPrivateFieldGet(this, _a, "f", _DataController_instance)) {
            return __classPrivateFieldGet(this, _a, "f", _DataController_instance);
        }
        __classPrivateFieldSet(this, _a, new DataController(), "f", _DataController_instance);
        return __classPrivateFieldGet(this, _a, "f", _DataController_instance);
    }
    subscribe(dataModel) {
        __classPrivateFieldGet(this, _DataController_subscribers, "f").add(dataModel);
    }
    unsubscribe(dataModel) {
        __classPrivateFieldGet(this, _DataController_subscribers, "f").delete(dataModel);
    }
    notify(...args) {
        __classPrivateFieldGet(this, _DataController_subscribers, "f").forEach(subscriber => {
            subscriber.notify(args);
        });
    }
}
exports.DataController = DataController;
_a = DataController, _DataController_subscribers = new WeakMap();
_DataController_instance = { value: void 0 };
