import { ITable, TableFactory } from "./table"
import { IChair, ChairFactory } from "./chair"

interface IProduct extends IChair, ITable { }

export default class ProductFactory {
    static getProduct(product: string): IProduct {
        if (["Brown Chair","Black Chair"].indexOf(product) > -1) {
            return ChairFactory.getChair(product.split(' ')[0]);
        } else if (["Brown Table","Black Table"].indexOf(product) > -1) {
            return TableFactory.getTable(product.split(' ')[0]);
        } else {
            throw new Error("No such product.")
        }
    }
}