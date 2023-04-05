import mongoose from "mongoose";
import { costumerSchema } from "../mongo-schemas/costumer.schema.js";

class CostumerModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model('Costumer', costumerSchema, 'Costumers')
    }

    async createCostumer(costumerData) {
        const costumer = await new this.mongo_model(costumerData)
        await costumer.save()
    }

    async getAllCostumers() {
        const costumers = await this.mongo_model.find()
        return costumers
    }

    async updateCostumer(costumerId, costumerData) {
        const costumerFound = await this.mongo_model.findById(costumerId)

        if(!costumerFound){
            throw new Error('Costumer not found')
        }

        await this.mongo_model.updateOne({_id: costumerId}, {
            name: costumerData.name || costumerFound.name,
            email: costumerData.email || costumerFound.email,
            phone: costumerData.phone || costumerFound.phone,
            address: {
                street: costumerData.street || costumerFound.street,
                city: costumerData.city || costumerFound.city,
                country: costumerData.country || costumerFound.country,
                zip: costumerData.zip || costumerFound.zip
            }
        })
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