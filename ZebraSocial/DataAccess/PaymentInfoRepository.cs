using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZebraSocial.Models;
using Microsoft.Data.SqlClient;
using Dapper;


namespace ZebraSocial.DataAccess
{
    public class PaymentInfoRepository
    {
        const string ConnectionString = "Server=localhost;Database=ZebraSocial;Trusted_Connection=True;";

        //GET ALL Payments
        public List<PaymentInfo> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"Select *
                        From PaymentInfo";

            return db.Query<PaymentInfo>(sql).ToList();
        }
    }
}
