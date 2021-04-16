using ZebraSocial.DataAccess;
using ZebraSocial.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZebraSocial.Controllers
{
    [Route("api/Customers")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        CustomerRepository _repo;
            public CustomerController()
        {
            _repo = new CustomerRepository();
        }
        
        [HttpGet]
        public IActionResult GetAllCustomers()
        {
            return Ok(_repo.GetAll());
        }

    }
}
