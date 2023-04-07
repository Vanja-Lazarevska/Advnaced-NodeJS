import CostumerModel from "../models/costumer.model.js";

const costumerModel = new CostumerModel()

class CostumerController {
    async createCostumer(costumerData) {
        const newCostumer = await costumerModel.createCostumer(costumerData)
        return newCostumer
    }

    async getAllCostumers() {
        const costumers = await costumerModel.getAllCostumers()
        return costumers
    }

    async updatedCostumer(costumerId, costumerData) {
        await costumerModel.updateCostumer(costumerId, costumerData)
    }

    async getCostumerById(costumerId){
        const costumerFound = await costumerModel.getCostumerById(costumerId)
        return costumerFound
    }

    async deleteCostumer(costumerId){
        await costumerModel.deleteCostumer(costumerId)
    }

}

export default CostumerController