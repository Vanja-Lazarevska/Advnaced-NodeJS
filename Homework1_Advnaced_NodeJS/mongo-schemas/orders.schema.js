import { Schema } from "mongoose";

export const orderSchema = new Schema({
    order_date: {
        type: String
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"  //za da znaeme koj e toj produkt koj sto e dodaden kako order
        }
    ],
    costumer_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Costumer"  //za da znaeme koj e toj customer koj go napravil orderot 
        }
    ]
})