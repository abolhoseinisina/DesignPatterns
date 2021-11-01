interface IChair {
    name: string
}

class Chair implements IChair {
    name = "";
}

class BrownChair extends Chair {
    constructor() {
        super();
        this.name = "Brown Chair";
    }
}

class BlackChair extends Chair {
    constructor() {
        super();
        this.name = "Black Chair";
    }
}
export class ChairFactory {
    static CreateChair(color: string): IChair {
        if (color === "Brown") {
            return new BrownChair();
        } else if (color === "Black") {
            return new BlackChair();
        } else {
            throw new Error("This color is not available!");
        }
    }
}