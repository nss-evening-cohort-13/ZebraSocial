import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerDetailsCard({ customer }) {
  return (
    <div className='card customerDetails m-2 border-light col-md-6' >
        <h1 className='card-title m-2'>Customer Information</h1>
      <div className='card-body'>
            <img className='card-img-top rounded-pill border border-white' src={customer.imageUrl} alt='Card cap' />
            <p className='card-text'>Name: {customer.firstName} {customer.lastName}</p>
            <p className='card-text'>Email: {customer.email}</p>
            <p className='card-text'>Payment Id: {customer.paymentId}</p>
      </div>
    </div>
  );
}

CustomerDetailsCard.propTypes = {
  customer: PropTypes.any
};
