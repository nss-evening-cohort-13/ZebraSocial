import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { updateCustomerInfo } from '../../helpers/data/customerData';

export default function EditCustomerForm({ customer }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log('data', data);

  const onSubmit = (data) => {
    const custId = customer.id;
    const parsedId = Number(data.id);
    const parsedPayment = Number(data.paymentId);
    const dataObject = {
      id: parsedId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      imageUrl: data.imageUrl,
      paymentId: parsedPayment
    };
    updateCustomerInfo(custId, dataObject)
      .catch((err) => console.warn('nope', err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5>Customer Id(read only)</h5>
      <input defaultValue={customer.id} {...register('id')} readOnly/>
      <h5>First Name</h5>
      <input defaultValue={customer.firstName} {...register('firstName', { required: true })} />
      <h5>Last Name</h5>
      <input defaultValue={customer.lastName} {...register('lastName', { required: true })} />
      <h5>Email</h5>
      <input defaultValue={customer.email} {...register('email', { required: true })} />
      <h5>Image Url</h5>
      <input defaultValue={customer.imageUrl} {...register('imageUrl', { required: true })} />
      <h5>Payment Id(read only)</h5>
      <input defaultValue={customer.paymentId} {...register('paymentId')} readOnly/>
      {errors.firstName && <span>This field is required</span>}
      {errors.lastName && <span>This field is required</span>}
      {errors.email && <span>This field is required</span>}
      {errors.imageUrl && <span>This field is required</span>}

      <button type='submit'>Submit</button>
    </form>
  );
}

EditCustomerForm.propTypes = {
  customer: PropTypes.any,
  payment: PropTypes.any
};
