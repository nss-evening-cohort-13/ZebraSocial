using System;
using ZebraSocial.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;

namespace ZebraSocial.DataAccess
{
    public class EventRepository
    {
        const string ConnectionString = "Server=localhost;Database=ZebraSocial;Trusted_Connection=True;";

        public List<Event>GetAll()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Events";
            var results = db.Query<Event>(sql).ToList();
            return results;
        }

        public void Add(Event yourEvent)
        {
            var sql = @"INSERT INTO [dbo].[Events] ([AnimalId],[Name],[Type],[Date],[Length], [Location], [Price], [CustomerId])
                                    OUTPUT inserted.Id 
                                    VALUES(@AnimalId ,@Name, @Type, @Date, @Length, @Location, @Price, @CustomerId)";

            var db = new SqlConnection(ConnectionString);
            var id = db.ExecuteScalar<int>(sql, yourEvent);

            yourEvent.Id = id;
        }

        public void Remove(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE Events
                        SET
                        AnimalId = Null,
                        Name = 'Deleted Event',
                        Type = Null,
                        Date = Null,
                        Length = Null,
                        Location = Null,
                        Price = Null,
                        CustomerId = Null
                        WHERE Id = @id";
            var yourEvent = GetId(id);
            
            db.Execute(sql, yourEvent);
        }


        public Event Get(string id)
        {
            var sql = @"SELECT *
                        FROM Events e
                        WHERE CustomerId = @id
                        ORDER BY e.Id DESC";
            using var db = new SqlConnection(ConnectionString);
            var yourEvent = db.QueryFirstOrDefault<Event>(sql, new { id });
            return yourEvent;
        }

        public void Update(Event yourEvent)
        {
            var sql = @"UPDATE Events
                        SET
                        AnimalId = @animalId,
                        Name = @name,
                        Type = @type,
                        Date = @date,
                        Length = @length,
                        Location = @location,
                        Price = @price,
                        CustomerId = @customerId
                        WHERE Id = @id";

            using var db = new SqlConnection(ConnectionString);
            db.Execute(sql, yourEvent);
        }

        public List<Event> GetAllById(string id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Events
                        WHERE CustomerId = @id";
            var results = db.Query<Event>(sql, new { id }).ToList();
            return results;
        }

        public Animal GetAnimal(string id)
        {
            var sql = @"SELECT a.*
                        FROM Events e
	                        join Animals a
		                        on e.AnimalId = a.Id
                        WHERE CustomerId = @id";
            using var db = new SqlConnection(ConnectionString);
            var yourAnimal = db.QueryFirstOrDefault<Animal>(sql, new { id });
            return yourAnimal;
        }

        public Event GetId(int id)
        {
            var sql = @"SELECT *
                        FROM Events
                        WHERE Id = @id";
            using var db = new SqlConnection(ConnectionString);
            var yourEvent = db.QueryFirstOrDefault<Event>(sql, new { id });
            return yourEvent;
        }
    }
}
