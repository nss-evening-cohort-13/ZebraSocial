using ZebraSocial.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;


namespace ZebraSocial.DataAccess
{
    public class CustomerRepository
    {
        const string ConnectionString = "Server=localhost;Database=ZebraSocial;Trusted_Connection=True;";

        public List<Customer> GetAll()
        {
            var Customers = new List<Customer>();

            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT *
                        From Customers";
            var results = db.Query<Customer>(sql).ToList();

            return results;
        }

    }
}
