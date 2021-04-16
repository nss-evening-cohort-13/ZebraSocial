﻿using System;
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
            var sql = @"INSERT INTO [dbo].[Events] ([AnimalId],[Name],[Type],[Date],[Length], [Location], [Price])
                                    OUTPUT inserted.Id 
                                    VALUES(@AnimalId ,@Name, @Type, @Date, @Length, @Location, @Price)";

            var db = new SqlConnection(ConnectionString);
            var id = db.ExecuteScalar<int>(sql, yourEvent);

            yourEvent.Id = id;
        }
    }
}
