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
    public class AnimalsController : ControllerBase
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

    }
}
