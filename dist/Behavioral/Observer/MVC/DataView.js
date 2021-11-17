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
var _BarGraph_dataModel, _BarGraph_id, _PieGraph_dataModel, _PieGraph_id, _Table_dataModel, _Table_id;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.PieGraph = exports.BarGraph = void 0;
class BarGraph {
    constructor(dataModel) {
        _BarGraph_dataModel.set(this, void 0);
        _BarGraph_id.set(this, void 0);
        __classPrivateFieldSet(this, _BarGraph_dataModel, dataModel, "f");
        __classPrivateFieldSet(this, _BarGraph_id, __classPrivateFieldGet(this, _BarGraph_dataModel, "f").subscribe(this), "f");
    }
    notify(args) {
        console.log(`notified to draw bar graph with this data ${args}`);
    }
    draw(args) {
        console.log(`   draw bar graph ...`);
    }
    delete() {
        __classPrivateFieldGet(this, _BarGraph_dataModel, "f").unsubscribe(__classPrivateFieldGet(this, _BarGraph_id, "f"));
    }
}
exports.BarGraph = BarGraph;
_BarGraph_dataModel = new WeakMap(), _BarGraph_id = new WeakMap();
class PieGraph {
    constructor(dataModel) {
        _PieGraph_dataModel.set(this, void 0);
        _PieGraph_id.set(this, void 0);
        __classPrivateFieldSet(this, _PieGraph_dataModel, dataModel, "f");
        __classPrivateFieldSet(this, _PieGraph_id, __classPrivateFieldGet(this, _PieGraph_dataModel, "f").subscribe(this), "f");
    }
    notify(args) {
        console.log(`notified to draw pie graph with this data ${args}`);
    }
    draw(args) {
        console.log(`   draw pie graph ...`);
    }
    delete() {
        __classPrivateFieldGet(this, _PieGraph_dataModel, "f").unsubscribe(__classPrivateFieldGet(this, _PieGraph_id, "f"));
    }
}
exports.PieGraph = PieGraph;
_PieGraph_dataModel = new WeakMap(), _PieGraph_id = new WeakMap();
class Table {
    constructor(dataModel) {
        _Table_dataModel.set(this, void 0);
        _Table_id.set(this, void 0);
        __classPrivateFieldSet(this, _Table_dataModel, dataModel, "f");
        __classPrivateFieldSet(this, _Table_id, __classPrivateFieldGet(this, _Table_dataModel, "f").subscribe(this), "f");
    }
    notify(args) {
        console.log(`notified to draw table with this data ${args}`);
    }
    draw(args) {
        console.log(`   draw table ...`);
    }
    delete() {
        __classPrivateFieldGet(this, _Table_dataModel, "f").unsubscribe(__classPrivateFieldGet(this, _Table_id, "f"));
    }
}
exports.Table = Table;
_Table_dataModel = new WeakMap(), _Table_id = new WeakMap();
