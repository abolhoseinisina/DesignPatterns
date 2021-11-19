"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregate = exports.AggregateIterator = void 0;
class AggregateIterator {
    constructor(aggregates) {
        this.index = 0;
        this.aggregates = aggregates;
    }
    next() {
        if (this.index < this.aggregates.length) {
            const aggregate = this.aggregates[this.index];
            this.index += 1;
            return aggregate;
        }
        throw new Error("end of the iterator");
    }
    hasNext() {
        return this.index < this.aggregates.length;
    }
}
exports.AggregateIterator = AggregateIterator;
class Aggregate {
    method() {
        console.log("method inside aggregate invoked.");
    }
}
exports.Aggregate = Aggregate;
