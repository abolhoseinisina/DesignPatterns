interface IStrategy {
    method(): void
}

interface IStrategyConstructor {
    new(): IStrategy,
}

export class Context {
    request(strategy: IStrategyConstructor){
        return new strategy();
    }
}

export class ConcreteStrategyA implements IStrategy {
    method(): void {
        console.log('I am concrete strategy A');
    }
}

export class ConcreteStrategyB implements IStrategy {
    method(): void {
        console.log('I am concrete strategy B');
    }
}

export class ConcreteStrategyC implements IStrategy {
    method(): void {
        console.log('I am concrete strategy C');
    }
}