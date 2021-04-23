import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerDetailsCard({ customer, payment }) {
  return (
      <div className="profile">
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src={customer.imageUrl} className="img-radius face" alt="User-Profile-Image"/> </div>
                                <h3 className="f-w-600">{customer.firstName} {customer.lastName}</h3>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Event</p>
                                        <h6 className="text-muted f-w-400">Event Info Here</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{customer.email}</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Payment Info</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Name On Card</p>
                                        <h6 className="text-muted f-w-400"><b>First:</b> {payment.firstName}</h6>
                                        <h6 className="text-muted f-w-400"><b>Last:</b> {payment.lastName}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Card Info</p>
                                        <h6 className="text-muted f-w-400">{payment.cardNumber}</h6>
                                        <h6 className="text-muted f-w-400"><b>Month: </b>{payment.expMonth} | <b>Year:</b> {payment.expYear}</h6>
                                        <h6 className="text-muted f-w-400">CVV: {payment.cvv}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

CustomerDetailsCard.propTypes = {
  customer: PropTypes.any,
  payment: PropTypes.any
};
