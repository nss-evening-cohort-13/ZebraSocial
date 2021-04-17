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
    [Route("api/PaymentInfo")]
    [ApiController]
    public class PaymentInfoController : ControllerBase
    {
        PaymentInfoRepository _repo;

        public PaymentInfoController()
        {
            _repo = new PaymentInfoRepository();
        }

        //Get api PaymentInfo
        [HttpGet]
        public IActionResult GetAllPaymentInfos()
        {
            return Ok(_repo.GetAll());
        }

    }
}
