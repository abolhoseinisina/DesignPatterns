"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiply = exports.Sub = exports.Add = exports.Value = void 0;
class _Value {
    constructor(value) {
        this.value = value;
    }
}
function Value(value1) {
    return new _Value(value1);
}
exports.Value = Value;
class _Add {
    constructor(value1, value2) {
        const left = Object.prototype.hasOwnProperty.call(value1, `value`) ? value1.value : value1;
        const right = Object.prototype.hasOwnProperty.call(value2, `value`) ? value2.value : value2;
        this.value = left + right;
    }
}
function Add(value1, value2) {
    return new _Add(value1, value2);
}
exports.Add = Add;
class _Sub {
    constructor(value1, value2) {
        const left = Object.prototype.hasOwnProperty.call(value1, `value`) ? value1.value : value1;
        const right = Object.prototype.hasOwnProperty.call(value2, `value`) ? value2.value : value2;
        this.value = left - right;
    }
}
function Sub(value1, value2) {
    return new _Sub(value1, value2);
}
exports.Sub = Sub;
class _Multiply {
    constructor(value1, value2) {
        const left = Object.prototype.hasOwnProperty.call(value1, `value`) ? value1.value : value1;
        const right = Object.prototype.hasOwnProperty.call(value2, `value`) ? value2.value : value2;
        this.value = left * right;
    }
}
function Multiply(value1, value2) {
    return new _Multiply(value1, value2);
}
exports.Multiply = Multiply;
