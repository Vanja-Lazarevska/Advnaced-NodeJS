import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const swaggerConfiguration = new DocumentBuilder()
  .setTitle('Food Order Application')
  .setDescription('Food order application created as homework for NodeJS Advanced')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, swaggerConfiguration)
  SwaggerModule.setup('app-docs',app, document)

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


// Implement relation and authentication
// Requirements: NOTE: Apply the requirements ON TOP OF the previous homework.
// PART 1

// Create OrderEntity that implements the Order inteface
// The order entity should have the same properties as the interface
// id should be primaryColumn
// orderDate should be column
// productsOrdered should be list of ProductEntities
// Create the relation between the OrderEntity and ProductEntity, using the productsOrdered property. NOTE: You should create a property in the ProductEntity too, that will be named order, and it will be in relation with the OrderEntity NOTE: Think of what the relation might be, between the ProductEntity and the OrderEntity
// PART 2

// Create new module and service, users
// In the users service hardcode few users
// Create one method findOne that returns user by username (same as in class)
// Create authentication on the application
// Create new module,service called auth
// Create local and jwt strategies
// Create local and jwt guards
// Create route for login that returns access_token to the user
// Orders routes must be guarded, and to access them we should provide access_token in the requst


// Implement relation and authentication
// Requirements: NOTE: Apply the requirements ON TOP OF the previous homework.
// PART 1

// On the user entity add one more property called role that is of type enum ( the enum should have two roles: ADMIN and COSTUMER)
// Create user entity using the typeorm. (It will create user table in the database for us)
// Create one more endpoint to register user. (Should include create user dto. The role should be provided from the request body)
// Install bcrypt (it is library to hash and compare hashed password; COMMAND TO INSTALL: npm install brypt; npm install --save @types/bcrypt)
// When registering new user, hash the user password before saving into the db, and when loging in the user, compare the password provided with the one of the db
// Make sure we can register a user, and login with the creadentials.
// PART 2

// Create costum roles decorator
// Create role guard
// The routes for creating, removing and updating a product can only be accessed by a user that has the role ADMIN.
// BONUS:

// Add swagger documentation on your nest application