import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {  GetCustomerResponse, CustomerGrpcService } from './contract/customer.interfaces';

@Injectable()
export class CustomerService implements OnModuleInit {
  private _service: CustomerGrpcService;

  constructor(@Inject('CUSTOMER') private _client: ClientGrpc) {
  }

  onModuleInit(): void {
    this._service = this._client.getService<CustomerGrpcService>('Customer');
  }

  getCustomer(id: number): Promise<GetCustomerResponse> {
    return this._service.getCustomer({ id });
  }
}
