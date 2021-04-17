﻿using ZebraSocial.DataAccess;
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
    public class CustomersController : ControllerBase
    {
        CustomerRepository _repo;
            public CustomersController()
        {
            _repo = new CustomerRepository();
        }
        
        [HttpGet]
        public IActionResult GetAllCustomers()
        {
            return Ok(_repo.GetAll());
        }

        // add a customer 
        [HttpPost]
        public IActionResult AddACustomer(Customer customer)
        {
            _repo.Add(customer);
            return Created($"api/Customers/{customer.Id}", customer);
        }

        [HttpGet("{id}")]
        public IActionResult GetCustomerById(int id)
        {
            var OneCustomer = _repo.GetCustomerById(id);

            if (OneCustomer == null)
            {
                return NotFound("This customer does not exist.");
            }

            return Ok(OneCustomer);
        }


        [HttpPut("{id}/update")]
        public IActionResult UpdateCustomer(Customer OneCustomer)
        {
            _repo.Update(OneCustomer);
           
            return Ok(OneCustomer);
        }

        /* Delete a customer 
        [HttpDelete("{customerId}")]

        public IActionResult DeleteCustomer(int customerId, int orderId)
        {
           if(customerId == orderId)
            {
                _repo.Remove(customerId);
                _repo.Remove(orderId);
            }

            return Ok();*/
     //   }


    }
}
