interface IObservable {
    subscribe(observer: IObserver): void,
    unsubscribe(observer: IObserver): void,
    notify(...args: unknown[]): void
}

export class Subject implements IObservable {
    #Observers: Set<IObserver>;

    constructor(){
        this.#Observers = new Set();
    }

    subscribe(observer: any): void {
        this.#Observers.add(observer);
    }
    unsubscribe(observer: any): void {
        this.#Observers.delete(observer);
    }
    notify(...args: unknown[]): void {
        this.#Observers.forEach((observer) => {
            observer.notify(args);
        })
    }
}

interface IObserver {
    notify(...args: unknown[]): void
}

export class Observer implements IObserver {
    #id: number = 0;

    constructor(observable: IObservable){
        this.#id = Math.random();
        observable.subscribe(this);
    }

    notify(...args: unknown[]): void {
        args.forEach((item) => {
            console.log(`observer number ${this.#id} recieved ${item}`);
        })
    }
}