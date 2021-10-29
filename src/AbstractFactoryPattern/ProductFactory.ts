import { ITable, TableFactory } from "./table"
import { IChair, ChairFactory } from "./chair"

interface IProduct extends IChair, ITable { }

export default class ProductFactory {
    static getProduct(product: string): IProduct {
        if (product.split(' ').includes("Chair")) {
            if (product.split(' ').includes("Black")) {
                return ChairFactory.getChair("Black");
            } else if (product.split(' ').includes("Brown")) {
                return ChairFactory.getChair("Brown");
            } else {
                throw new Error("No such color in chairs.");
            }
        } else if (product.split(' ').includes("Table")) {
            if (product.split(' ').includes("Black")) {
                return TableFactory.getTable("Black");
            } else if (product.split(' ').includes("Brown")) {
                return TableFactory.getTable("Brown");
            } else {
                throw new Error("No such color in tables.");
            }
        } else {
            throw new Error("No such product.")
        }
    }
}