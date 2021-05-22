using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZebraSocial.Models
{
    public class Event
    {
        public int Id { get; set; }
        public int AnimalId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public DateTime Date { get; set; }
        public Length Length { get; set; }
        public string Location { get; set; }
        public decimal Price { get; set; }
        public string CustomerId { get; set; }
        public bool IsPaidFor { get; set; }

    }
    public enum Length
    {
        FullDay,
        HalfDayMorning,
        HalfDayEvening
    }
}
