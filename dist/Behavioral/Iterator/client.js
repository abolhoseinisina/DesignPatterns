"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Iterator_1 = require("./Iterator");
const AGGREGATES = [
    new Iterator_1.Aggregate(),
    new Iterator_1.Aggregate(),
    new Iterator_1.Aggregate(),
    new Iterator_1.Aggregate(),
    new Iterator_1.Aggregate()
];
const iterable = new Iterator_1.AggregateIterator(AGGREGATES);
while (iterable.hasNext()) {
    iterable.next().method();
}
