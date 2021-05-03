import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsCard({ animal }) {
  return (
    <div className='product-container'>
    <div className='product-card m-2'>
      <div className='card-body embed-responsive embed-responsive-16by9'>
      <img src={animal.imageUrl} className='image embed-responsive-item'/>
        <h5>({animal.type})</h5>
        <h6 className='card-text'>
          {animal.description}
          <p>({animal.id})</p>
        </h6>
      </div>
    </div>
</div>
  );
}
ProductsCard.propTypes = {
  animal: PropTypes.any,
};
