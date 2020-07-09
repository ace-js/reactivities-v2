import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path'

@Module({
  imports: [ClientsModule.register([
    {
      name: 'CUSTOMER',
      transport: Transport.GRPC,
      options: {
        package: 'customer',
        protoPath: join(__dirname, '/contract/customer.proto'),
        url: 'localhost:50051'
      }
    },
  ])],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
