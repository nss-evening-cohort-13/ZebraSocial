import React from 'react';
import PropTypes from 'prop-types';
import MyModal from '../AppModal';
import EditEventForm from '../Forms/EditEventForm';

export default function AnimalsCard({ animal }) {
  return (
    <div className='animals-container'>
    <div className='animals-card m-2'>
      <div className='card-body'>
        <h1 className='card-title'>{animal.name}</h1>
        <h5>({animal.type})</h5>
        <p className='card-text'>
          {animal.description}
        </p>
        <MyModal title={`You Picked ${animal.name}!`} buttonLabel={'Add Event'}>
                        <EditEventForm
                          key={animal.id}
                          animal={animal}
                        />
                      </MyModal>
      </div>
    </div>
</div>
  );
}
AnimalsCard.propTypes = {
  animal: PropTypes.any,
};
