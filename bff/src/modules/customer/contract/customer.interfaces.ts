export interface GetCustomerResponse {
  id: number;
  firstname: string;
  name: string;
  age: number
};

export interface GetCustomerRequest {
  id: number;
};

export interface CustomerGrpcService {
  getCustomer(data: GetCustomerRequest): Promise<GetCustomerResponse>;
};
