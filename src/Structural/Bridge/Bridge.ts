interface IAbstaction {
    method(value: string[]): void
}

interface IImplementation {
    method(value: string[]): void
}

export class Abstraction implements IAbstaction {
    #implementer: IImplementation;

    constructor(implementer: IImplementation) {
        this.#implementer = implementer;
    }

    method(value: string[]): void {
        this.#implementer.method(value);
    }
}

// export class AbstractionB implements IAbstaction {
//     #implementer: IImplementation;

//     constructor(implementer: IImplementation) {
//         this.#implementer = implementer;
//     }

//     method(value: string[]): void {
//         this.#implementer.method(value);
//     }
// }

export class ImplemenetationA implements IImplementation {
    method(value: string[]): void {
        console.log(value);
    }
}

export class ImplemenetationB implements IImplementation {
    method(value: string[]): void {
        value.forEach((item) => console.log(item));
    }
}