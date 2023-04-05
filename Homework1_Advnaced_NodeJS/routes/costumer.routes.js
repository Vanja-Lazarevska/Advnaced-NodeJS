import { Router } from "express";
import CostumerController from "../controllers/costumer.controller.js";

const costumerRouter = Router()
const costumerController = new CostumerController()


// CREATE COSTUMER
costumerRouter.post('/', async(req, res) => {

    if(Object.keys.length === 1){
        res.status(400).send({message: "Costumer not created"})
    } else {
        await costumerController.createCostumer(req.body)
        res.status(201).send({message: "New costumer created"})
    }

})

// GET ALL COSTUMERS
costumerRouter.get('/', async(req, res) => {
    try {
        const costumers = await costumerController.getAllCostumers()
        res.send(costumers)
        
    } catch (error) {
        res.status(404).send({message: "Costumer not found"})

    }

})

// UPDATE COSTUMER
costumerRouter.patch('/:id', async(req, res)=>{
    try {
     await costumerController.updatedCostumer(id, req.body)
        res.send(`Costumer with id: ${id} updated `)
        
    } catch (error) {
        res.status(404).send({message: error.message})
    }
})

// GET COSTUMER BY ID
costumerRouter.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const costumerFound = await costumerController.getCostumerById(id)
        res.send(costumerFound)
    } catch (error) {
        res.status(404).send({message: "Costumer not found"})
    }

})

// DELETE COSTUMER
costumerRouter.delete('/:id', async(req, res)=> {
    const id = req.params.id
    try {
        await costumerController.deleteCostumer(id)
        res.send({message: `Costumer with id: ${id} deleted`})
    } catch (error) {
        res.status(404).send({message: "Can not delete costumer"}) 
    }
})

export default costumerRouter