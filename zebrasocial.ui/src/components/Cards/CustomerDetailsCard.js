import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import getUid from '../../helpers/data/authData';
import { getCustomerById } from '../../helpers/data/customerData';
import { getPaymentInfoById } from '../../helpers/data/paymentData';
import { getEventById } from '../../helpers/data/eventData';
import MyModal from '../AppModal';
import EditCustomerForm from '../Forms/EditCustomerForm';
import EditPaymentForm from '../Forms/EditPaymentForm';

export default function CustomerDetailsCard({ customer, customerPayment }) {
  const [cust, setCustomers] = useState([]);
  const [pay, setPayments] = useState([]);
  const [event, setEvents] = useState([]);

  const getCustomer = (customerId) => {
    getCustomerById(customerId)
      .then((response) => {
        const singleCustomer = response;
        setCustomers(singleCustomer);
      })
      .catch((err) => console.warn('nope', err));
  };
  const getPayment = (customerPaymentId) => {
    getPaymentInfoById(customerPaymentId).then((response) => {
      const paymentInfo = response;
      setPayments(paymentInfo);
    })
      .catch((err) => console.warn('nope', err));
  };

  const getEvent = (customerId) => {
    getEventById(customerId).then((response) => {
      if (response) {
        const eventInfo = response;
        setEvents(eventInfo);
      } else {
        setEvents(null);
      }
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const customerId = getUid();
    getCustomer(customerId);
  }, [cust]);
  useEffect(() => {
    if (customerPayment) {
      getPayment(customerPayment);
    }
  }, [pay]);
  useEffect(() => {
    const customerId = getUid();
    getEvent(customerId);
  }, [event]);
  return (
    <div className='profile'>
      <h1>My Profile</h1>
      <div className='page-content page-container leftPad' id='page-content'>
        <div className='padding'>
          <div className='row container d-flex justify-content-center'>
            <div>
              <div className='card user-card-full'>
                <div className='row m-l-0 m-r-0'>
                  <div className='col-sm-4 bg-c-lite-green user-profile'>
                    <div className='card-block text-center text-white'>
                      <div className='m-b-25'>
                        {' '}
                        <img
                          src={cust.imageUrl}
                          className='img-radius face'
                          alt='User-Profile-Image'
                        />{' '}
                      </div>
                      <h3 className='f-w-600 name'>
                        {cust.firstName} {cust.lastName}
                      </h3>
                    </div>
                  </div>
                  <div className='col-sm-8'>
                    <div className='card-block'>
                      <h6 className='m-b-20 p-b-5 b-b-default f-w-600'>
                        Information
                      </h6>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Event</p>
                          <Link to={`/events/${customer.firebaseId}`} className='text-muted f-w-400'><Button color="info">Your Event</Button></Link>
                        </div>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Email</p>
                          <h6 className='text-muted f-w-400'>
                            {cust.email}
                          </h6>
                        </div>
                      </div>
                      <MyModal title={'Edit Info'} color={'warning'} buttonLabel={'Edit Info'}>
                        <EditCustomerForm
                          customer={cust}
                          key={cust.id}
                        />
                      </MyModal>
                      <h6 className='m-b-20 m-t-40 p-b-5 b-b-default f-w-600'>
                        Payment Info
                      </h6>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Name On Card</p>
                          <h6 className='text-muted f-w-400'>
                            <b>First:</b> {pay.firstName}
                          </h6>
                          <h6 className='text-muted f-w-400'>
                            <b>Last:</b> {pay.lastName}
                          </h6>
                        </div>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Card Info</p>
                          <h6 className='text-muted f-w-400'>
                            {pay.cardNumber}
                          </h6>
                          <h6 className='text-muted f-w-400'>
                            <b>Month: </b>
                            {pay.expMonth} | <b>Year:</b> {pay.expYear}
                          </h6>
                          <h6 className='text-muted f-w-400'>
                            CVV: {pay.cvv}
                          </h6>
                        </div>
                      </div>
                      <MyModal title={'Edit Payment'} color={'success'} buttonLabel={'Edit Payment'}>
                        <EditPaymentForm
                          customer={cust}
                          key={pay.id}
                          payment={pay}
                        />
                      </MyModal>
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
  payment: PropTypes.any,
  customerPayment: PropTypes.any,
};
