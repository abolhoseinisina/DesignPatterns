interface IFlyweight {
    code: number,
}

class Flyweight implements IFlyweight {
    code: number;

    constructor(code: number) {
        this.code = code;
    }
}

export class FlyweightFactory {
    static flyweights: { [id: number]: Flyweight } = {};

    static getFlyweight(code: number): Flyweight {
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code);
        }

        return FlyweightFactory.flyweights[code];
    }

    static getCount(): number {
        return Object.keys(FlyweightFactory.flyweights).length;
    }
}

export class AppContext {
    private codes: number[] = [];

    constructor(codes: string) {
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i));
        }
    }

    output(){
        let result = '';
        this.codes.forEach((c) => {
            result = result + String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
        })

        return result;
    }
}