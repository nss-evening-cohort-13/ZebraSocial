import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsCard({ animal }) {
  return (
    <div className='product-container'>
    <div className='product-card m-2'>
      <div className='card-body'>
        <h1 className='card-title'>{animal.name}</h1>
        <h5>({animal.type})</h5>
        <p className='card-text'>
          {animal.description}
          <h7>({animal.id})</h7>
        </p>
      </div>
    </div>
</div>
  );
}
ProductsCard.propTypes = {
  animal: PropTypes.any,
};
