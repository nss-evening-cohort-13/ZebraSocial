﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace ZebraSocial.DataAccess
{
    public class AnimalRepository
    {
        const string ConnectionString = "Server=localhost;Database=ZebraSocial;Trusted_Connection=True;";

        //GET ALL Animals
        public List<Animal> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"Select *
                        From Animals";

            return db.Query<Animal>(sql).ToList();
        }
        //ADD Animal
        public void Add(Animal animal)
        {
            var sql = @"INSERT INTO [Animals] ([Name],[Type],[EventSpecialty],[ImageUrl],[Description],[Price])
                        OUTPUT inserted.Id
                        VALUES(@Name, @Type, @EventSpecialty, @ImageUrl, @Description, @Price)";

            using var db = new SqlConnection(ConnectionString);

            var id = db.ExecuteScalar<int>(sql, animal);

            animal.Id = id;
        }
    }
}