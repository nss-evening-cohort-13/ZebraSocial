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
        AnimalsRepository _repo;

        public AnimalsController()
        {
            _repo = new AnimalsRepository();
        }

        //Get api Animals
        [HttpGet]
        public IActionResult GetAllAnimals()
        {
            return Ok(_repo.GetAll());
        }
    }
}
