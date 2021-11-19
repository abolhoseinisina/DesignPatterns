import { Aggregate, AggregateIterator } from "./Iterator";

const AGGREGATES = [
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate()
]

const iterable = new AggregateIterator(AGGREGATES);

while(iterable.hasNext()){
    iterable.next().method();
}