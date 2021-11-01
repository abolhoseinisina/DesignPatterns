"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairFactory = void 0;
class Chair {
    constructor() {
        this.name = "";
    }
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
class ChairFactory {
    static CreateChair(color) {
        if (color === "Brown") {
            return new BrownChair();
        }
        else if (color === "Black") {
            return new BlackChair();
        }
        else {
            throw new Error("This color is not available!");
        }
    }
}
exports.ChairFactory = ChairFactory;
