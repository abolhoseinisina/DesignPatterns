interface IState {
    toString(): void,
}

class ConcreteStateA implements IState {
    toString() {
        console.log('I am Concrete State A')
    }
}

class ConcreteStateB implements IState {
    toString() {
        console.log('I am Concrete State B')
    }
}

class ConcreteStateC implements IState {
    toString() {
        console.log('I am Concrete State C')
    }
}

export class Context {
    #stateHandles: IState[];
    #handle: IState | undefined;

    constructor() {
        this.#stateHandles = [
            new ConcreteStateA(),
            new ConcreteStateB(),
            new ConcreteStateC(),
        ];
        this.#handle = undefined;
    }

    request() {
        this.#handle = this.#stateHandles[Math.floor(Math.random() * 3)];
        return this.#handle.toString();
    }
}