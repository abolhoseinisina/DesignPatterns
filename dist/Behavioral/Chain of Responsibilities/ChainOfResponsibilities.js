"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
class Successor1 {
    handle(payload) {
        console.log(`successor 1 with payload ${payload}`);
        const rand = Math.floor(Math.random() * 2 + 1);
        if (rand === 1) {
            payload++;
            payload = new Successor1().handle(payload);
        }
        else {
            payload++;
            payload = new Successor2().handle(payload);
        }
        return payload;
    }
}
class Successor2 {
    handle(payload) {
        console.log(`successor 2 with payload ${payload}`);
        const rand = Math.floor(Math.random() * 3 + 1);
        if (rand === 1) {
            payload++;
            payload = new Successor1().handle(payload);
        }
        else if (rand === 2) {
            payload++;
            payload = new Successor2().handle(payload);
        }
        return payload;
    }
}
class Chain {
    start(payload) {
        return new Successor1().handle(payload);
    }
}
exports.Chain = Chain;
