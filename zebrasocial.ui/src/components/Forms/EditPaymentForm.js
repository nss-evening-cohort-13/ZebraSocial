import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { updatePaymentInfo } from '../../helpers/data/paymentData';
import { baseUrl } from '../../helpers/config.json';
import { getCustomerById, updateCustomerInfo } from '../../helpers/data/customerData';

const paymentUrl = `${baseUrl}/paymentInfo`;

export default function EditPaymentForm({ payment, customer }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const customerPayId = customer.paymentId;
    const customerId = customer.firebaseId;
    const paymentId = payment.id;
    const parsedId = Number(payment.id);
    const parsedMonth = Number(data.expMonth);
    const parsedYear = Number(data.expYear);
    const parsedCVV = Number(data.cvv);
    const dataObject = {
      id: parsedId,
      firstName: data.firstName,
      lastName: data.lastName,
      cardNumber: data.cardNumber,
      expMonth: parsedMonth,
      expYear: parsedYear,
      cvv: parsedCVV,
    };
    if (!paymentId) {
      axios.post(paymentUrl, dataObject).then((response) => {
        const newId = response.data.id;
        getCustomerById(customerId)
          .then((resp) => {
            const custId = resp.id;
            const respObject = {
              id: resp.id,
              firstName: resp.firstName,
              lastName: resp.lastName,
              email: resp.email,
              imageUrl: resp.imageUrl,
              paymentId: newId,
              firebaseId: resp.firebaseId
            };
            updateCustomerInfo(custId, respObject)
              .catch((err) => console.warn('nope', err));
          });
      });
    } else {
      updatePaymentInfo(paymentId, dataObject)
        .catch((err) => console.warn('nope', err));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5>First Name</h5>
      <input defaultValue={payment.firstName || null} {...register('firstName', { required: true })} />
      <h5>Last Name</h5>
      <input defaultValue={payment.lastName || null} {...register('lastName', { required: true })} />
      <h5>Card Number</h5>
      <input defaultValue={payment.cardNumber || null} {...register('cardNumber', { required: true })} />
      <h5>Exp Month</h5>
      <input defaultValue={payment.expMonth || null} {...register('expMonth', { required: true })} />
      <h5>Exp Year</h5>
      <input defaultValue={payment.expYear || null} {...register('expYear', { required: true })} />
      <h5>CVV</h5>
      <input defaultValue={payment.cvv || null} {...register('cvv', { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      {errors.lastName && <span>This field is required</span>}
      {errors.cardNumber && <span>This field is required</span>}
      {errors.expMonth && <span>This field is required</span>}
      {errors.expYear && <span>This field is required</span>}
      {errors.cvv && <span>This field is required</span>}

      <button type='submit'>Submit</button>
    </form>
  );
}

EditPaymentForm.propTypes = {
  customer: PropTypes.any,
  payment: PropTypes.any
};
