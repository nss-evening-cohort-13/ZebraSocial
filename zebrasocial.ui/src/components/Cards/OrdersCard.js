import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ orders }) {
  return (
      <div className='product-container'>
      <div className='product-card m-2'>
        <div className='card-body'>
          <h1 className='card-title'></h1>
          <h5>{orders.id}</h5>
          <h6 className='card-text'>
            <p></p>
          </h6>
        </div>
      </div>
  </div>
  );
}
OrderCard.propTypes = {
  orders: PropTypes.any,
};
