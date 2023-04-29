import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();


// Building Food Order Application
// Requirements:
// Create new nest application food_order_application
// Create new module called order
// Create new service called order
// Create new controller called order
// Create interface Product with the following properties: id: string, productName: string, productPrice: number
// Create interface Order with the following properties: id: string (id of the order), orderDate: Date (the date when the order was made), productsOrdered: Product[] (list of products)
// Create hardcoded array of orders
// Whenever /orders is requested, return the hardcoded array of orders to the user.
// NOTE: Use postman to play with the end point. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.

// Implement routes on the food order application
// Requirements: NOTE: Apply the requirements ON TOP OF the previous homework (the first homework of nest js).
// PART 1
// Create GET route that returns order by id, throw error if order with given id is not found;
// Create POST route that creates new order ( Create DTO for the request body);
// Create PUT route that updates an existing order, create DTO for the update request body, throw error if order with given id that is supposed to be updated is not existing;
// Create DELETE route that deletes order by given id, throw error if order with given id is not found;
// Currently we are not working with databases so you have to "manipulate" with the array.
// PART 2
// Create new controller, module and service called products
// In the service, hardcode an array of products using the Product interface created from the previous homework.
// The controller should have one GET route that returns all products.
// NOTE: Use postman to play and test the endpoint. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.


// Implement database in the application
// Requirements: NOTE: Apply the requirements ON TOP OF the previous homework.
// PART 1
// Using the pgAdmin application for interacting with the local postgres database, create new databse named "food_app_db". ( At class we manually created one called "tasks" );
// Connect/Initialize the database in the App Module ( kind reminder: see the code from class as inspiration)
// Create new Entity class called ProductsEntity that implements the inteface Product.
// Decorate each property of the class with @Column and @PrimaryColumn for the id property.
// In the products module register the entity (ProductsEntity).
// NOTE: Feel free and use the code from class and guide and inspiration.
// PART 2
// Once you have registered and implemented the database, implement the following CRUD operation in the products controller.
// On the route Get all products, instead to return the values of the hardcoded array, return the products from the database
// On the route Get product by id, instead of returning a product of the hardcoded array, return product by id from the database
// Create new route called create product. when called should create and save one product entity in the database.
// NOTE: Use postman to play and test the endpoint. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.