"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneType = exports.MyClass = void 0;
class MyClass {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }
    clone(mode) {
        let array;
        if (mode === CloneType.deep) {
            array = JSON.parse(JSON.stringify(this.array));
        }
        else if (mode === CloneType.shallow) {
            array = Object.assign({}, this.array);
        }
        return new MyClass(this.name, array);
    }
}
exports.MyClass = MyClass;
var CloneType;
(function (CloneType) {
    CloneType[CloneType["deep"] = 1] = "deep";
    CloneType[CloneType["shallow"] = 2] = "shallow";
})(CloneType = exports.CloneType || (exports.CloneType = {}));
