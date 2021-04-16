using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.DataAccess;

namespace ZebraSocial.Controllers
{
    [Route("api/Events")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        EventRepository _repo;
        
        public EventsController()
        {
            _repo = new EventRepository();
        }
        [HttpGet]
        public IActionResult GetAllEvents()
        {
            return Ok(_repo.GetAll());
        }
    }
}
