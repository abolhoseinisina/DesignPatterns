"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("./table");
const chair_1 = require("./chair");
class ProductFactory {
    static getProduct(product) {
        if (product.split(' ').includes("Chair")) {
            if (product.split(' ').includes("Black")) {
                return chair_1.ChairFactory.getChair("Black");
            }
            else if (product.split(' ').includes("Brown")) {
                return chair_1.ChairFactory.getChair("Brown");
            }
            else {
                throw new Error("No such color in chairs.");
            }
        }
        else if (product.split(' ').includes("Table")) {
            if (product.split(' ').includes("Black")) {
                return table_1.TableFactory.getTable("Black");
            }
            else if (product.split(' ').includes("Brown")) {
                return table_1.TableFactory.getTable("Brown");
            }
            else {
                throw new Error("No such color in tables.");
            }
        }
        else {
            throw new Error("No such product.");
        }
    }
}
exports.default = ProductFactory;
