"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Flyweight_1 = require("./Flyweight");
class Column {
    constructor() {
        this.data = '';
        this.width = 10;
        this.justify = 0;
    }
    getData() {
        const codes = [];
        for (let i = 0; i < this.data.length; i++) {
            codes.push(this.data.charCodeAt(i));
        }
        let ret = '';
        Array.from(codes).forEach((c) => {
            ret =
                ret +
                    String.fromCharCode(Flyweight_1.FlyweightFactory.getFlyweight(c).code);
        });
        switch (this.justify) {
            case 1:
                ret = this.leftAlign(this.width, ret, ' ');
                break;
            case 2:
                ret = this.rightAlign(this.width, ret, ' ');
                break;
            default:
                ret = this.center(this.width, ret, ' ');
        }
        return ret;
    }
    center(width, string, padding) {
        return width <= string.length
            ? string
            : this.centerAlternate(width, padding + string, padding);
    }
    centerAlternate(width, string, padding) {
        return width <= string.length
            ? string
            : this.center(width, string + padding, padding);
    }
    leftAlign(width, string, padding) {
        return width <= string.length
            ? string
            : this.leftAlign(width, string + padding, padding);
    }
    rightAlign(width, string, padding) {
        return width <= string.length
            ? string
            : this.rightAlign(width, padding + string, padding);
    }
}
exports.default = Column;
