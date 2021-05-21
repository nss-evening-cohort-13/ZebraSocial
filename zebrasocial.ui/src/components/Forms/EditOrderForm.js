import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addOrder } from '../../helpers/data/orderData';

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
      setTimeout(() => {
        history.push('/success');
      }, 500);
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
