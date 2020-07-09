import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomerGrpcResponse } from './contract/customer.grpc.response';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) : Promise<CustomerGrpcResponse> {
    return this.customerService.getCustomer(id);
  }
}
