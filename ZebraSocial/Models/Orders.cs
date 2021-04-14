using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZebraSocial.Models
{
    public class Orders
    {
        public int Id { get; set; }
        public int Customer_Id { get; set; }
        public int Event_Id { get; set; }
        public decimal Money { get; set; }
    }
}
