export interface IAbstractExpression {
    interpret(): number
}

export class Numeral implements IAbstractExpression {
    value: number;

    constructor(value: string){
        this.value = parseInt(value);
    }

    interpret(): number {
        return this.value;
    }
}

export class Add implements IAbstractExpression {
    left: IAbstractExpression;
    right: IAbstractExpression;

    constructor(left: IAbstractExpression, right: IAbstractExpression){
        this.left = left;
        this.right = right;
    }

    interpret(): number {
        return this.left.interpret() + this.right.interpret();
    }
}

export class Subtract implements IAbstractExpression {
    left: IAbstractExpression;
    right: IAbstractExpression;

    constructor(left: IAbstractExpression, right: IAbstractExpression){
        this.left = left;
        this.right = right;
    }

    interpret(): number {
        return this.left.interpret() - this.right.interpret();
    }
}

export class Multiply implements IAbstractExpression {
    left: IAbstractExpression;
    right: IAbstractExpression;

    constructor(left: IAbstractExpression, right: IAbstractExpression){
        this.left = left;
        this.right = right;
    }

    interpret(): number {
        return this.left.interpret() * this.right.interpret();
    }
}