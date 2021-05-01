import React from 'react';
import PropTypes from 'prop-types';

export default function AnimalsCard({ animal }) {
  return (
    <div className='animals-container'>
    <div className='animals-card m-2'>
      <div className='card-body'>
        <h1 className='card-title'>{animal.name}</h1>
        <h5>({animal.type})</h5>
        <p className='card-text'>
          {animal.description}
          <h5>({animal.id})</h5>
        </p>
      </div>
    </div>
</div>
  );
}
AnimalsCard.propTypes = {
  animal: PropTypes.any,
};
