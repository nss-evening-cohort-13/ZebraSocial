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
    public class PaymentInfoController : FirebaseEnabledController
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

        //POST api Payments
        [HttpPost]
        public IActionResult AddAnPaymentInfo(PaymentInfo paymentinfo)
        {
            _repo.Add(paymentinfo);
            return Created($"api/PaymentInfo/{paymentinfo.Id}", paymentinfo);
        }

        //GET to /api/PaymentInfo/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var paymentinfo = _repo.Get(id);

            if (paymentinfo == null)
            {
                return NotFound("Payment not found");
            }

            return Ok(paymentinfo);
        }

        //Delete a Payment
        [HttpDelete("{paymentId}")]
        public IActionResult DeleteAnimal(int paymentId)
        {
            _repo.Remove(paymentId);

            return Ok();
        }

        [HttpPut("{id}/update")]
        public IActionResult UpdatePaymentInfo(int id, PaymentInfo paymentInfoObj)
        {
            var paymentInfo = _repo.Get(id);
            paymentInfo.FirstName = paymentInfoObj.FirstName;
            paymentInfo.LastName = paymentInfoObj.LastName;
            paymentInfo.CardNumber = paymentInfoObj.CardNumber;
            paymentInfo.ExpMonth = paymentInfoObj.ExpMonth;
            paymentInfo.ExpYear = paymentInfoObj.ExpYear;
            paymentInfo.CVV = paymentInfoObj.CVV;
            _repo.Update(paymentInfo);
            return NoContent();
        }

        [HttpGet("{customerPaymentId}/payInfo")]
        public IActionResult GetCustomersPaymentById(int customerPaymentId)
        {
            return Ok(_repo.GetCustomerPayment(customerPaymentId));
        }

    }
}
