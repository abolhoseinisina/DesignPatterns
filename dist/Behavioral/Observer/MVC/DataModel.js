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
var _DataModel_id, _DataModel_subscribers, _DataModel_controller, _DataModel_counter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const DataController_1 = require("./DataController");
class DataModel {
    constructor() {
        _DataModel_id.set(this, void 0);
        _DataModel_subscribers.set(this, {});
        _DataModel_controller.set(this, void 0);
        _DataModel_counter.set(this, 0);
        __classPrivateFieldSet(this, _DataModel_id, Math.floor(Math.random() * 10000), "f");
        __classPrivateFieldSet(this, _DataModel_controller, DataController_1.DataController.getInstance(), "f");
        __classPrivateFieldGet(this, _DataModel_controller, "f").subscribe(this);
    }
    subscribe(dataView) {
        var _a;
        __classPrivateFieldSet(this, _DataModel_counter, (_a = __classPrivateFieldGet(this, _DataModel_counter, "f"), _a++, _a), "f");
        __classPrivateFieldGet(this, _DataModel_subscribers, "f")[__classPrivateFieldGet(this, _DataModel_counter, "f")] = dataView;
        return __classPrivateFieldGet(this, _DataModel_counter, "f");
    }
    unsubscribe(dataViewId) {
        delete __classPrivateFieldGet(this, _DataModel_subscribers, "f")[dataViewId];
    }
    notify(args) {
        Object.keys(__classPrivateFieldGet(this, _DataModel_subscribers, "f")).forEach((subscriber) => {
            __classPrivateFieldGet(this, _DataModel_subscribers, "f")[parseInt(subscriber)].notify(args);
        });
    }
}
exports.DataModel = DataModel;
_DataModel_id = new WeakMap(), _DataModel_subscribers = new WeakMap(), _DataModel_controller = new WeakMap(), _DataModel_counter = new WeakMap();
