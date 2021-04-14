using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZebraSocial.Models
{
    public class PaymentInfo
    {
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public int Card_Number { get; set; }
        public string Exp_Month { get; set; }
        public int Exp_Year { get; set; }
        public int CVV { get; set; }
    }
}
