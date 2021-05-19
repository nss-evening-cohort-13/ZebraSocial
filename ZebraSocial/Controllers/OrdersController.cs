using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.DataAccess;
using ZebraSocial.Models;

namespace ZebraSocial.Controllers
{
    [Route("api/Orders")]
    [ApiController]
    public class OrdersController : FirebaseEnabledController
    {
        OrderRepository _repo;

        public OrdersController()
        {
            _repo = new OrderRepository();
        }
        [HttpGet]
        // api/orders
        public IActionResult GetAllOrders()
        {
            return Ok(_repo.GetAll());
        }

        [HttpPost]
        // api/orders
        public IActionResult AddEvent(Order order)
        {
            _repo.Add(order);
            return Created($"api/Events/{order.Id}", order);
        }

        [HttpPut("{id}/update")]
        // api/orders/{id}/update
        public IActionResult UpdateEvent(Order order)
        {
            if (order == null)
            {
                return NotFound("The order you are trying to update could not be found. Sorry...");
            };
            _repo.Update(order);

            return Ok(order);
        }

        [HttpGet("{id}")]
        // api/orders/{id}
        public IActionResult GetById(int id)
        {
            var order = _repo.Get(id);

            if (order == null)
            {
                return NotFound("The order you are trying to get could not be found. Sorry...");
            };
            return Ok(order);
        }

        [HttpDelete("{orderId}")]
        // api/orders/{orderId}
        public IActionResult DeleteOrder(int orderId)
        {
            _repo.Remove(orderId);

            return Ok();
        }
        
        
        [HttpGet("{customerId}/Orders")]
        public IActionResult GetEventsById(string customerId)
        {
            return Ok(_repo.GetCustomerOrder(customerId));
        }
    }
}
