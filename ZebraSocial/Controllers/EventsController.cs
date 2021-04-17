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
        // api/events
        public IActionResult GetAllEvents()
        {
            return Ok(_repo.GetAll());
        }

        [HttpPost]
        // api/events
        public IActionResult AddEvent(Event yourEvent)
        {
            _repo.Add(yourEvent);
            return Created($"api/Events/{yourEvent.Id}", yourEvent);
        }

        [HttpDelete("{eventId}")]
        // api/events/{eventId}
        public IActionResult DeleteEvent(int eventId)
        {
            _repo.Remove(eventId);

            return Ok();
        }

        [HttpGet("{id}")]
        // api/events/{id}
        public IActionResult GetById(int id)
        {
            var yourEvent = _repo.Get(id);

            if (yourEvent == null)
            {
                return NotFound("The event you are trying to get could not be found. Sorry...");
            };
            return Ok(yourEvent);
        }

        [HttpPut("{id}/update")]
        // api/events/{id}/update
        public IActionResult UpdateEvent(Event yourEvent)
        {
            if (yourEvent == null)
            {
                return NotFound("The event you are trying to update could not be found. Sorry...");
            };
            _repo.Update(yourEvent);

            return Ok(yourEvent);
        }
    }
}
