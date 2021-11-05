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
var _CubeBAdapter_cubeB;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeBAdapter = exports.CubeA = void 0;
class CubeA {
    manufacture(height, width, depth) {
        const now = Date.now();
        if (now > CubeA.lastTime + 1500) {
            console.log(`   Company A create a cube with ${height}x${width}x${depth}`);
            CubeA.lastTime = now;
            return true;
        }
        return false;
    }
}
exports.CubeA = CubeA;
CubeA.lastTime = Date.now();
class CubeB {
    create(topLeftCorner, bottomRightCorner) {
        const now = Date.now();
        if (now > CubeB.lastTime + 3000) {
            console.log(`   Company B create a cube with [${topLeftCorner[0]},${topLeftCorner[1]},${topLeftCorner[2]}],[${bottomRightCorner[0]},${bottomRightCorner[1]},${bottomRightCorner[2]}]`);
            CubeB.lastTime = now;
            return true;
        }
        return false;
    }
}
CubeB.lastTime = Date.now();
class CubeBAdapter {
    constructor() {
        _CubeBAdapter_cubeB.set(this, void 0);
        __classPrivateFieldSet(this, _CubeBAdapter_cubeB, new CubeB(), "f");
    }
    manufacture(width, height, depth) {
        const success = __classPrivateFieldGet(this, _CubeBAdapter_cubeB, "f").create([0 - width / 2, 0 - height / 2, 0 - depth / 2], [0 + width / 2, 0 + height / 2, 0 + depth / 2]);
        return success;
    }
}
exports.CubeBAdapter = CubeBAdapter;
_CubeBAdapter_cubeB = new WeakMap();
