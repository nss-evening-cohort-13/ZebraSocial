import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

export default function App({ animalName }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={animalName} {...register('example')} />
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}

App.propTypes = {
  animalName: PropTypes.any,
};
