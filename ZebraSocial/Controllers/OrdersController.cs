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
    public class OrdersController : ControllerBase
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

        [HttpDelete("{orderId}")]
        // api/orders/{orderId}
        public IActionResult DeleteOrder(int orderId)
        {
            _repo.Remove(orderId);

            return Ok();
        }
    }
}
