import React from 'react';
import PropTypes from 'prop-types';
import MyModal from '../AppModal';
import EditAnimalForm from '../Forms/EditAnimalForm';

export default function ProductsCard({ animal }) {
  return (
    <div className='product-container'>
    <div className='product-card m-2'>
      <div className='card-body'>
        <h1 className='card-title'>{animal.name}</h1>
        <h5>({animal.type})</h5>
        <p className='card-text'>
          {animal.description}
        </p>
        <MyModal title={`Edit ${animal.name}`} buttonLabel={'Edit Animal'}>
                 <EditAnimalForm
                    key={animal.id}
                    animal={animal}
                  />
        </MyModal>
      </div>
    </div>
</div>
  );
}
ProductsCard.propTypes = {
  animal: PropTypes.any,
};
