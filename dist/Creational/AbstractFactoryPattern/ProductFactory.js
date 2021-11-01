"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("./table");
const chair_1 = require("./chair");
class ProductFactory {
    static getProduct(product) {
        if (["Brown Chair", "Black Chair"].indexOf(product) > -1) {
            return chair_1.ChairFactory.getChair(product.split(' ')[0]);
        }
        else if (["Brown Table", "Black Table"].indexOf(product) > -1) {
            return table_1.TableFactory.getTable(product.split(' ')[0]);
        }
        else {
            throw new Error("No such product.");
        }
    }
}
exports.default = ProductFactory;
