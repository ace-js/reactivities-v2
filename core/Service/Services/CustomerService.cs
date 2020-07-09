using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace Service
{
    public class CustomerService : Customer.CustomerBase
    {
        private readonly ILogger<CustomerService> _logger;

        public CustomerService(ILogger<CustomerService> logger)
        {
            _logger = logger;
        }

        public override Task<CustomerModel> GetCustomer(GetCutomerRequest request, ServerCallContext context)
        {
            return Task.FromResult(new CustomerModel()
            {
                Id = request.Id,
                Firstname = "Arnaud",
                Name = "Bertieaux",
                Age = 310
            });
        }
    }
}