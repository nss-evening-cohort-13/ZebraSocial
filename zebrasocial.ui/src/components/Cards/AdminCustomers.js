import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPaymentInfoById } from '../../helpers/data/paymentData';

export default function AdminCustomers({ customer }) {
  const [payment, setPayments] = useState([]);

  const sendMail = () => {
    const link = 'https://mail.google.com/mail/?view=cm&fs=1&to=';
    const { email } = customer;
    return link.concat(email);
  };

  const getPayment = (customerId) => {
    getPaymentInfoById(customerId).then((response) => {
      const paymentInfo = response;
      setPayments(paymentInfo);
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const customerPayment = customer.firebaseId;
    if (customerPayment) {
      getPayment(customerPayment);
    }
  }, [payment]);

  return (
        <div className="adminCustomers">
            <div className="content">
    <div className="container">
        {/* <!-- end row --> */}
        <div className="">
            <div className="">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto mb-3"><img src={customer.imageUrl} className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4 className="mb-3">{customer.firstName} {customer.lastName}</h4>
                            <h4 className="text-muted"><span><p className="text-pink mb-3">{customer.email}</p></span></h4>
                        </div>
                        <hr />
                        <a href={sendMail()}><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Send Email</button></a>
                        <h4 className="mt-3">Payment Info</h4>
                        <p className="mt-3">Card Number: {payment.cardNumber}</p>
                        <div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="mt-1">
                                        <h4>Name</h4>
                                        <p className="mb-0 text-muted">{payment.firstName}</p>
                                        <p className="mb-0 text-muted">{payment.lastName}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-1">
                                        <h4>Exp</h4>
                                        <p className="mb-0 text-muted">Month: {payment.expMonth} Year: {payment.expYear}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-1">
                                        <h4>CVV</h4>
                                        <p className="mb-0 text-muted">{payment.cvv}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end col --> */}
        </div>
    </div>
    {/* <!-- container --> */}
</div>
        </div>
  );
}

AdminCustomers.propTypes = {
  customer: PropTypes.any,
};
