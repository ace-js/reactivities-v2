import { Controller, Get, Param, ParseIntPipe, Logger } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { GetCustomerResponse } from './contract/customer.interfaces';

@Controller('customer')
export class CustomerController {
  private readonly _logger: Logger
  constructor(private _customerService: CustomerService ) {
    this._logger = new Logger('CustomerController')
  }

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) : Promise<GetCustomerResponse> {
    this._logger.debug(`Get customer with ID "${id}"`);
    return this._customerService.getCustomer(id);
  }
}
