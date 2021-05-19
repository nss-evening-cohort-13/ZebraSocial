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

        public void Update(Order order)
        {
            var sql = @"UPDATE Orders
                        SET
                        CustomerId = @customerId,
                        EventId = @eventId,
                        Total = @total
                        WHERE Id = @id";
                        

            using var db = new SqlConnection(ConnectionString);
            db.Execute(sql, order);
        }

        public Order Get(int id)
        {
            var sql = @"SELECT *
                        FROM Orders
                        WHERE Id = @id";
            using var db = new SqlConnection(ConnectionString);
            var order = db.QueryFirstOrDefault<Order>(sql, new { id });
            return order;
        }

        public void Remove(int id)
        {
            var sql = @"DELETE
                        FROM Orders
                        WHERE Id = @id";

            using var db = new SqlConnection(ConnectionString);
            db.Execute(sql, new { id });
        }
        public Order GetCustomerOrder(string id)
        {
            using var db = new SqlConnection(ConnectionString);
            // comments
            var sql = @"Select o.*
                        FROM Orders o
                        join Events e on o.EventId = e.id
                        join Customers c on o.CustomerId = c.id
                        where c.FirebaseId = @id";

            var Order = db.QueryFirstOrDefault<Order>(sql, new { id = id });

            return Order;
        }
    }
}
