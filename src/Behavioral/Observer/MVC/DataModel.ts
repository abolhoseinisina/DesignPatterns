import { DataController, IDataController } from './DataController';
import { IDataView } from './DataView'

export interface IDataModel {
    subscribe(dataView: IDataView): number,
    unsubscribe(dataViewId: number): void,
    notify(args: number[]): void,
}

export class DataModel implements IDataModel {
    #id: number;
    #subscribers: {[id: number]: IDataView} = {};
    #controller: IDataController;
    #counter: number = 0;

    constructor() {
        this.#id = Math.floor(Math.random() * 10000);
        this.#controller = DataController.getInstance();
        this.#controller.subscribe(this);
    }

    subscribe(dataView: IDataView): number {
        this.#counter++;
        this.#subscribers[this.#counter] = dataView;
        
        return this.#counter;
    }
    unsubscribe(dataViewId: number): void {
        delete this.#subscribers[dataViewId];
    }

    notify(args: number[]): void {
        Object.keys(this.#subscribers).forEach((subscriber) => {
            this.#subscribers[parseInt(subscriber)].notify(args);
        })
    }
}