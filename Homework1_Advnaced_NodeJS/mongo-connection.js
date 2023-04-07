import mongoose from "mongoose";
import * as dotenv from 'dotenv'


    dotenv.config()
const MONGO_URL = process.env.MONGO_URL


export const mongo_connection = async () =>  {

    try {
        await mongoose.connect(MONGO_URL, {
            dbName: 'food_app'
        })
        console.log('Connected to db')
       } catch (error) {
        console.log(MONGO_URL)
       throw new Error('Connection do Mongo database failed')        
    }

}

