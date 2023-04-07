import express from 'express'
import router from './consts/router.consts.js'
import { mongo_connection } from './mongo-connection.js'
const app = express()

app.use(express.json())

app.use(router)

app.listen(3000, async () => {
    console.log('Server is up and running')
    await mongo_connection()
})

// Create one more costumer collection, using the flow and implementation as the rest of the code. Implement the CRUD operations to get all costumers, get costumer by id, delete costumer, and update costumer.
// REQUIREMENTS:
// Using the MVC pattern, mongoose schemas, and mongoose model create one more collection Costumer;
// The costumer object should have the following props (name: string, email:string, phone:string, address: string); BONUS: Make the adress property to be object that contains the following properties (street, city, country, zip);
// The Order schema should have one more property costumer_id which refers to the id of the costumer object(the costumer who created this order);
// When get all orders or get order by id route is requested, now it should return the fully information about the costumer itself.
// BONUS:
// Add validation on the routes