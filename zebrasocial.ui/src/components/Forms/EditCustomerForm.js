import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

export default function EditCustomerForm({ customer }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log('data', data);

  //   console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={customer.name} {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}

EditCustomerForm.propTypes = {
  customer: PropTypes.any,
  payment: PropTypes.any
};
