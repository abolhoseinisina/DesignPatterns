class Memento {
    state: string;

    constructor(state: string) {
        this.state = state;
    }
}

export class Originator {
    #state: string;

    constructor() {
        this.#state = '';
    }

    get state(): string {
        return this.#state;
    }

    set state(state: string) {
        this.#state = state;
        console.log(`Originator: originator state changed to ${this.#state}`);
    }

    get memento(): Memento {
        console.log('Originator: Providing memento of state to caretaker.');
        return new Memento(this.#state);
    }

    set memento(value: Memento){
        this.#state = value.state;
        console.log(`Originator: state restore from the memento ${this.#state}`)
    } 
}

export class CareTaker {
    #originator: Originator;
    #mementos: Memento[];

    constructor(originator: Originator){
        this.#originator = originator;
        this.#mementos = [];
    }

    create(){
        console.log(`CareTaker: getting a copy of originator current state.`);
        const memento = new Memento(this.#originator.state);
        this.#mementos.push(memento);
    }

    restore(index: number){
        console.log(`CareTaker: restoring originator state from mementos`);
        this.#originator.memento = this.#mementos[index];
    }
}