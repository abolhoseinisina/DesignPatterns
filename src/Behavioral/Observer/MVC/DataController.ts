import { IDataModel } from "./DataModel";

export interface IDataController {
    subscribe(dataModel: IDataModel): void,
    unsubscribe(dataModel: IDataModel): void,
    notify(...args: number[]): void
}

export class DataController implements IDataController {
    #subscribers: Set<IDataModel>;
    static #instance: IDataController | undefined;

    private constructor() {
        this.#subscribers = new Set();
    }

    static getInstance() {
        if (this.#instance) {
            return this.#instance;
        }

        this.#instance = new DataController();
        return this.#instance;
    }

    subscribe(dataModel: IDataModel): void {
        this.#subscribers.add(dataModel);
    }

    unsubscribe(dataModel: IDataModel): void {
        this.#subscribers.delete(dataModel);
    }

    notify(...args: number[]): void {
        this.#subscribers.forEach(subscriber => {
            subscriber.notify(args);
        });
    }
}