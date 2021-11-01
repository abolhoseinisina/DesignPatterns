export interface ITable {
    name: string;
}

class Table implements ITable {
    name = "";
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

export class TableFactory {
    static getTable(color: string): ITable {
        if (color === "Brown") {
            return new BrownTable();
        } else if (color === "Black") {
            return new BlackTable();
        } else {
            throw new Error("No table with this color is available.")
        }
    }
}