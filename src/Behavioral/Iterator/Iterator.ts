interface IIterator {
    next(): IAggregate,
    hasNext(): boolean,
}

export class AggregateIterator implements IIterator {
    index: number;
    aggregates: IAggregate[];

    constructor(aggregates: IAggregate[]){
        this.index = 0;
        this.aggregates = aggregates;
    }
    next(): IAggregate {
        if(this.index < this.aggregates.length){
            const aggregate = this.aggregates[this.index];
            this.index += 1;
            
            return aggregate;
        }
        
        throw new Error("end of the iterator");
    }

    hasNext(): boolean {
        return this.index < this.aggregates.length;
    }    
}

interface IAggregate {
    method(): void,
}

export class Aggregate implements IAggregate {
    method(): void {
        console.log("method inside aggregate invoked.");
    }
}