import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { addEvent } from '../../helpers/data/eventData';
import getUid from '../../helpers/data/authData';

export default function App({ animal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentUser = getUid();

  const onSubmit = (data) => {
    const parsedId = Number(data.animalId);
    const parsedLength = Number(data.length);
    const dataObject = {
      animalId: parsedId,
      name: data.name,
      type: data.type,
      date: data.date,
      length: parsedLength,
      location: data.location,
      customerId: currentUser,
      isPaidFor: false
    };
    addEvent(dataObject)
      .catch((err) => console.warn('nope', err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' defaultValue={animal.id} {...register('animalId')} readOnly/>
        <h5>Event Name</h5>
      <input {...register('name', { required: true })} />
        <h5>Event Type</h5>
      <input {...register('type', { required: true })} />
        <h5>Date</h5>
      <input type="datetime-local" id="meeting-time"
       name="meeting-time"
       min="2021-06-14T00:00" max="2300-06-14T00:00" {...register('date', { required: true })} />
        <h5>Length</h5>
        <select {...register('length', { required: true })}>
        <option value={0}>Full Day</option>
        <option value={1}>Half Day Morning</option>
        <option value={2}>Half Day Evening</option>
      </select>
        <h5>Location</h5>
      <input {...register('location', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}

App.propTypes = {
  animal: PropTypes.any
};
