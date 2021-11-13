"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const column_1 = require("./column");
class Row {
    constructor(column_count) {
        this.columns = [];
        for (let i = 0; i < column_count; i++) {
            this.columns.push(new column_1.default());
        }
    }
    getData() {
        let ret = '';
        this.columns.forEach((column) => {
            ret = `${ret}${column.getData()}|`;
        });
        return ret;
    }
}
exports.default = Row;
