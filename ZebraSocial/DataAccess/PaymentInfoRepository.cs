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

        //Get a single Payment
        public PaymentInfo Get(int id)
        {
            var sql = @"Select *
                        From PaymentInfo
                        where Id = @id";

            using var db = new SqlConnection(ConnectionString);

            var paymentinfo = db.QueryFirstOrDefault<PaymentInfo>(sql, new { id = id });

            return paymentinfo;
        }
        //Delete Payment
        public void Remove(int id)
        {
            var sql = @"Delete 
                        from PaymentInfo 
                        where Id = @id";

            using var db = new SqlConnection(ConnectionString);

            db.Execute(sql, new { id });
        }

        public void Update(PaymentInfo paymentInfo)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE [PaymentInfo]
                        SET FirstName = @FirstName,
                            LastName = @LastName,
	                        CardNumber = @CardNumber,
	                        ExpMonth = @ExpMonth,
	                        ExpYear = @ExpYear,
                            CVV= @CVV
                        WHERE id = @id";
            db.Execute(sql, paymentInfo);
        }
        // get customers payment by id
        public PaymentInfo GetCustomerPayment(int id)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT p.*
                        FROM  PaymentInfo p
	                        join CUSTOMERS c
		                        on c.PaymentId = p.Id
		                where c.PaymentId = @id";

            var paymentinfo = db.QueryFirstOrDefault<PaymentInfo>(sql, new { id = id });

            return paymentinfo;
        }
    }
}
