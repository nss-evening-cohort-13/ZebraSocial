import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCustomerById } from '../../helpers/data/customerData';
import MyModal from '../AppModal';
import EditCustomerForm from '../Forms/EditCustomerForm';

export default function CustomerDetailsCard({ customer, payment }) {
  const [cust, setCustomers] = useState([]);

  const getCustomer = (customerId) => {
    getCustomerById(customerId)
      .then((response) => {
        const singleCustomer = response;
        setCustomers(singleCustomer);
      })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const customerId = customer.id;
    getCustomer(customerId);
  }, [cust]);
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
                          <h6 className='text-muted f-w-400'>Order Info</h6>
                        </div>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Email</p>
                          <h6 className='text-muted f-w-400'>
                            {cust.email}
                          </h6>
                        </div>
                      </div>
                      <h6 className='m-b-20 m-t-40 p-b-5 b-b-default f-w-600'>
                        Payment Info
                      </h6>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Name On Card</p>
                          <h6 className='text-muted f-w-400'>
                            <b>First:</b> {payment.firstName}
                          </h6>
                          <h6 className='text-muted f-w-400'>
                            <b>Last:</b> {payment.lastName}
                          </h6>
                        </div>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Card Info</p>
                          <h6 className='text-muted f-w-400'>
                            {payment.cardNumber}
                          </h6>
                          <h6 className='text-muted f-w-400'>
                            <b>Month: </b>
                            {payment.expMonth} | <b>Year:</b> {payment.expYear}
                          </h6>
                          <h6 className='text-muted f-w-400'>
                            CVV: {payment.cvv}
                          </h6>
                        </div>
                      </div>
                      <MyModal title={'Edit Info'} buttonLabel={'Edit Info'}>
                        <EditCustomerForm
                          customer={cust}
                          key={cust.id}
                          payment={payment}
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
};
