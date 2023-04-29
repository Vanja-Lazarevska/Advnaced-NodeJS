import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [OrderModule, ProductsModule, TypeOrmModule.forRoot({
    type: "postgres",
    username: 'postgres',
    password: "pass123456",
    port: 5432,
    host: "localhost",
    database: "food_app_db",
    synchronize: true,
    autoLoadEntities: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
