"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiply = exports.Subtract = exports.Add = exports.Numeral = void 0;
class Numeral {
    constructor(value) {
        this.value = parseInt(value);
    }
    interpret() {
        return this.value;
    }
}
exports.Numeral = Numeral;
class Add {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}
exports.Add = Add;
class Subtract {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}
exports.Subtract = Subtract;
class Multiply {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() * this.right.interpret();
    }
}
exports.Multiply = Multiply;
