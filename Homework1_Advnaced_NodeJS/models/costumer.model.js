import mongoose from "mongoose";
import { costumerSchema } from "../mongo-schemas/costumer.schema.js";

class CostumerModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model('Costumer', costumerSchema, 'Costumers')
    }

    async createCostumer(costumerData) {
        const costumer =  new this.mongo_model(costumerData)
        await costumer.save()
    }

    async getAllCostumers() {
        const costumers = await this.mongo_model.find()
        return costumers
    }

    async updateCostumer(costumerId, costumerData) {
        const costumerFound = await this.mongo_model.findByIdAndUpdate(costumerId, costumerData)
        return costumerFound
    }

    async getCostumerById(costumerId){
       const costumerFound =  await this.mongo_model.findById(costumerId)
       return costumerFound
    }

    async deleteCostumer(costumerId) {
        await this.mongo_model.findByIdAndDelete(costumerId)
    }
}

export default CostumerModel