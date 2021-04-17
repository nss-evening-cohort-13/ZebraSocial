using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.Models;

namespace ZebraSocial.DataAccess
{
    public class OrderRepository
    {
        const string ConnectionString = "Server=localhost;Database=ZebraSocial;Trusted_Connection=True;";

        public List<Order> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Orders";
            var results = db.Query<Order>(sql).ToList();
            return results;
        }

        public void Add(Order order)
        {
            var sql = @"INSERT INTO [dbo].[Orders] ([CustomerId],[EventId],[Total])
                                    OUTPUT inserted.Id 
                                    VALUES(@CustomerId ,@EventId, @Total)";

            var db = new SqlConnection(ConnectionString);
            var id = db.ExecuteScalar<int>(sql, order);

            order.Id = id;
        }

        public void Remove(int id)
        {
            var sql = @"DELETE
                        FROM Orders
                        WHERE Id = @id";

            using var db = new SqlConnection(ConnectionString);
            db.Execute(sql, new { id });
        }
    }
}
