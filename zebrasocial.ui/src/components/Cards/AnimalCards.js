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
      <MyModal title={'About This Rental'} buttonLabel={'Click Here For Details'}>
      <div className='card-body embed-responsive embed-responsive-16by9'>
        <img src={animal.imageUrl} className='image embed-responsive-item'/>
      </div>
        <h4 className='card-info'>Name: {animal.name}</h4>
        <h4 className='card-title'>Type: {animal.type}</h4>
        <h4 className='card-title'>Can Be Used For: {animal.eventSpecialty}</h4>
        <h4 className='card-title'>Price: {animal.price}</h4>
        <h4 className='card-title'>Description: {animal.description}</h4>
      </MyModal>
    </div>
</div>
  );
}
AnimalsCard.propTypes = {
  animal: PropTypes.any,
};
