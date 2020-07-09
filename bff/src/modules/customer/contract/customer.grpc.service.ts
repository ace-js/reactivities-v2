import { CustomerGrpcResponse } from './customer.grpc.response';

export interface CustomerGrpcService {
   getCustomer(data: { id: number }): Promise<CustomerGrpcResponse>;
}
