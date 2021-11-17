import { IDataModel } from "./DataModel";

export interface IDataView {
    notify(args: number[]): void,
    draw(args: number[]): void,
    delete(): void
}

export class BarGraph implements IDataView {
    #dataModel: IDataModel;
    #id: number;

    constructor(dataModel: IDataModel){
        this.#dataModel = dataModel;
        this.#id = this.#dataModel.subscribe(this);
    }

    notify(args: number[]): void {
        console.log(`notified to draw bar graph with this data ${args}`)
    }
    draw(args: number[]): void {
        console.log(`   draw bar graph ...`)
    }
    delete(): void {
        this.#dataModel.unsubscribe(this.#id);
    }
}

export class PieGraph implements IDataView {
    #dataModel: IDataModel;
    #id: number;

    constructor(dataModel: IDataModel){
        this.#dataModel = dataModel;
        this.#id = this.#dataModel.subscribe(this);
    }
    notify(args: number[]): void {
        console.log(`notified to draw pie graph with this data ${args}`)
    }
    draw(args: number[]): void {
        console.log(`   draw pie graph ...`)
    }
    delete(): void {
        this.#dataModel.unsubscribe(this.#id);
    }
    
}

export class Table implements IDataView {
    #dataModel: IDataModel;
    #id: number;

    constructor(dataModel: IDataModel){
        this.#dataModel = dataModel;
        this.#id = this.#dataModel.subscribe(this);
    }

    notify(args: number[]): void {
        console.log(`notified to draw table with this data ${args}`)
    }
    draw(args: number[]): void {
        console.log(`   draw table ...`)
    }
    delete(): void {
        this.#dataModel.unsubscribe(this.#id);
    }
}