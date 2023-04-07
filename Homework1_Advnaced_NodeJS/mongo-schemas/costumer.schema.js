import { Schema } from "mongoose";

export const costumerSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        street: String,
        city: String,
        country: String,
        zip: Number
    } 
})