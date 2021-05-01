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

        public void Add(Customer customer)
        {
            var sql = @"INSERT INTO [dbo].[Customers] ([firstName],[lastName],[email],[imageUrl],[firebaseId])
                        OUTPUT inserted.Id
                        VALUES(@firstName ,@lastName ,@email ,@imageUrl ,@firebaseId)";
           
           var db = new SqlConnection(ConnectionString);
           var id = db.ExecuteScalar<int>(sql, customer);

            customer.Id = id;
        }

        public Customer GetCustomerById(string id)
        {
            var sql = @"select *
                        from [Customers]
                        where firebaseId = @id";

            using var db = new SqlConnection(ConnectionString);

            var OneCustomer = db.QueryFirstOrDefault<Customer>(sql, new { Id = id });

            return OneCustomer;
        }

        public void Update(Customer OneCustomer)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"UPDATE [Customers]
                        SET FirstName = @FirstName,
                            LastName = @LastName,
	                        Email = @Email,
	                        ImageUrl = @ImageUrl
                        WHERE Id = @id";

            db.Execute(sql, OneCustomer);
        }
        public void Remove(string id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE [Customers]
                        SET
                        FirstName = Null,
                        LastName = Null,
                        Email = Null,
                        ImageUrl = Null,
                        PaymentId = Null,
                        FirebaseId = Null
                        WHERE firebaseId = @id";
            var OneCustomer = GetCustomerById(id);

            db.Execute(sql, OneCustomer);
        }

    }

}

