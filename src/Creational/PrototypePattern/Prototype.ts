interface IPrototype {
    clone(mode: number): MyClass
}

export class MyClass implements IPrototype {
    name: string;
    array: number[];

    constructor(name: string, array: number[]) {
        this.name = name;
        this.array = array;
    }

    clone(mode: CloneType): MyClass {
        let array;
        if (mode === CloneType.deep) {
            array = JSON.parse(JSON.stringify(this.array));
        } else if (mode === CloneType.shallow) {
            array = Object.assign({}, this.array);
        }
        
        return new MyClass(this.name, array);
    }
}

export enum CloneType{
    deep = 1,
    shallow = 2
}