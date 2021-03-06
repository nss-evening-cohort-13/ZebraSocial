using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.Models;
using ZebraSocial.DataAccess;
using Dapper;

namespace ZebraSocial.Controllers
{
    [Route("api/Animals")]
    [ApiController]
    public class AnimalsController : FirebaseEnabledController
    {
        AnimalRepository _repo;

        public AnimalsController()
        {
            _repo = new AnimalRepository();
        }

        //Get api Animals
        [HttpGet]
        public IActionResult GetAllAnimals()
        {
            return Ok(_repo.GetAll());
        }

        //POST api Animals
        [HttpPost]
        public IActionResult AddAnAnimal(Animal animal)
        {
            _repo.Add(animal);
            return Created($"api/Animals/{animal.Id}", animal);
        }

        //GET to /api/Animals/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var animal = _repo.Get(id);

            if (animal == null)
            {
                return NotFound("Animal not found");
            }

            return Ok(animal);
        }

        [HttpPut("{id}/update")]
        // api/orders/{id}/update
        public IActionResult UpdateEvent(Animal animal)
        {
            if (animal == null)
            {
                return NotFound("The event you are trying to update could not be found. Sorry...");
            };
            _repo.Update(animal);

            return Ok(animal);
        }

        //Delete an Aninal
        [HttpDelete("{animalId}")]
        public IActionResult DeleteAnimal(int animalId)
        {
            _repo.Remove(animalId);

            return Ok();
        }

    }
}
