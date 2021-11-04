interface IValue {
    value: number
}

class _Value implements IValue {
    value: number;

    constructor(value: number){
        this.value = value;
    }
}

export function Value(value1: number): IValue {
    return new _Value(value1)
}

class _Add implements IValue {
    value: number;

    constructor(value1: number | IValue, value2: number | IValue) {
        const left = Object.prototype.hasOwnProperty.call(value1, `value`) ? (value1 as IValue).value : value1 as number;
        const right = Object.prototype.hasOwnProperty.call(value2, `value`) ? (value2 as IValue).value : value2 as number;
        this.value = left + right;
    }
}

export function Add(value1: number | IValue, value2: number | IValue): IValue{
    return new _Add(value1, value2)
}

class _Sub implements IValue {
    value: number;

    constructor(value1: number | IValue, value2: number | IValue) {
        const left = Object.prototype.hasOwnProperty.call(value1, `value`) ? (value1 as IValue).value : value1 as number;
        const right = Object.prototype.hasOwnProperty.call(value2, `value`) ? (value2 as IValue).value : value2 as number;
        this.value = left - right;
    }
}

export function Sub(value1: number | IValue, value2: number | IValue): IValue{
    return new _Sub(value1, value2)
}

class _Multiply implements IValue {
    value: number;

    constructor(value1: number | IValue, value2: number | IValue) {
        const left = Object.prototype.hasOwnProperty.call(value1, `value`) ? (value1 as IValue).value : value1 as number;
        const right = Object.prototype.hasOwnProperty.call(value2, `value`) ? (value2 as IValue).value : value2 as number;
        this.value = left * right;
    }
}

export function Multiply(value1: number | IValue, value2: number | IValue): IValue{
    return new _Multiply(value1, value2)
}