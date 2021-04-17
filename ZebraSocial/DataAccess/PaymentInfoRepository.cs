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

        //ADD Payment
        public void Add(PaymentInfo paymentinfo)
        {
            var sql = @"INSERT INTO [PaymentInfo] ([FirstName],[LastName],[CardNumber],[ExpMonth],[ExpYear],[CVV])
                        OUTPUT inserted.Id
                        VALUES(@FirstName, @LastName, @CardNumber, @ExpMonth, @ExpYear, @CVV)";

            using var db = new SqlConnection(ConnectionString);

            var id = db.ExecuteScalar<int>(sql, paymentinfo);

            paymentinfo.Id = id;
        }
    }
}
