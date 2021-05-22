import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addOrder } from '../../helpers/data/orderData';
import { getEventById, updateEventInfo } from '../../helpers/data/eventData';
import getUid from '../../helpers/data/authData';

export default function EditCustomerForm({ customer, event, zebra }) {
  const {
    handleSubmit,
  } = useForm();

  const history = useHistory();

  const price = () => {
    const total = zebra.price + event.price;
    const tax = total * 0.0925;
    const final = total + tax;
    return `${final.toFixed(2)}`;
  };

  const onSubmit = () => {
    const parsedId = Number(customer.id);
    const parsedEvent = Number(event.id);
    const parsedTotal = parseFloat(price());
    const dataObject = {
      customerId: parsedId,
      eventId: parsedEvent,
      total: parsedTotal,
    };
    addOrder(dataObject).then(() => {
      const uid = getUid();
      getEventById(uid).then((response) => {
        const responseObject = {
          id: response.id,
          animalId: response.animalId,
          name: response.name,
          type: response.type,
          date: response.date,
          length: response.length,
          location: response.location,
          customerId: response.customerId,
          isPaidFor: true
        };
        updateEventInfo(response.id, responseObject).then(() => {
          setTimeout(() => {
            history.push('/success');
          }, 500);
        })
          .catch((err) => console.warn('event not updated', err));
      })
        .catch((err) => console.warn('nope', err));
    })
      .catch((err) => console.warn('add order broke', err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Are you sure you want to checkout?</h2>
      <button type='submit' className="btn btn-danger">Yup</button>
    </form>
  );
}

EditCustomerForm.propTypes = {
  customer: PropTypes.any,
  payment: PropTypes.any,
  event: PropTypes.any,
  zebra: PropTypes.any,
};
