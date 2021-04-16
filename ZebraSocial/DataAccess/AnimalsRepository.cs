using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace ZebraSocial.DataAccess
{
    public class AnimalsRepository
    {
        const string ConnectionString = "Server=localhost;Database=ZebraSocial;Trusted_Connection=True;";

        //Returns ALL Animals
        public List<Animals> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"Select *
                        From Animals";

            return db.Query<Animals>(sql).ToList();
        }

    }
}
