import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CustomerGrpcService } from './contract/customer.grpc.service';
import { CustomerGrpcResponse } from './contract/customer.grpc.response';

@Injectable()
export class CustomerService implements OnModuleInit {
  private service: CustomerGrpcService;

  constructor(@Inject('CUSTOMER') private client: ClientGrpc) {
  }

  onModuleInit(): void {
    this.service = this.client.getService<CustomerGrpcService>('Customer');
  }

  getCustomer(id: number): Promise<CustomerGrpcResponse> {
    return this.service.getCustomer({ id });
  }
}
