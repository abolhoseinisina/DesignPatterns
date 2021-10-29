"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFactory = void 0;
class Table {
    constructor() {
        this.name = "";
    }
}
class BrownTable extends Table {
    constructor() {
        super();
        this.name = "Brown Table";
    }
}
class BlackTable extends Table {
    constructor() {
        super();
        this.name = "Black Table";
    }
}
class TableFactory {
    static getTable(color) {
        if (color === "Brown") {
            return new BrownTable();
        }
        else if (color === "Black") {
            return new BlackTable();
        }
        else {
            throw new Error("No table with this color is available.");
        }
    }
}
exports.TableFactory = TableFactory;
