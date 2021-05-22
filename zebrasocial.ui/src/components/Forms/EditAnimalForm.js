import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../../helpers/config.json';
import updateAnimalInfo from '../../helpers/data/productData';

const animalUrl = `${baseUrl}/animals`;
export default function EditAnimalForm({ animal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log('data', data);

  const onSubmit = (data) => {
    const animalId = animal.id;
    const parsedId = Number(animal.id);
    const parsedPrice = Number(data.price);
    const dataObject = {
      id: parsedId,
      name: data.name,
      type: data.type,
      eventSpecialty: data.eventSpecialty,
      imageUrl: data.imageUrl,
      description: data.description,
      price: parsedPrice
    };
    if (!animalId) {
      const newAnimal = {
        name: data.name,
        type: data.type,
        eventSpecialty: data.eventSpecialty,
        imageUrl: data.imageUrl,
        description: data.description,
        price: parsedPrice
      };
      axios.post(animalUrl, newAnimal);
    } else {
      updateAnimalInfo.updateAnimalInfo(animalId, dataObject)
        .catch((err) => console.warn('nope', err));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5>Name</h5>
      <input defaultValue={animal.name || null} {...register('name', { required: true })} />
      <h5>Type</h5>
      <input defaultValue={animal.type || null} {...register('type', { required: true })} />
      <h5>Event Specialty</h5>
      <input defaultValue={animal.eventSpecialty || null} {...register('eventSpecialty', { required: true })} />
      <h5>Image Url</h5>
      <input defaultValue={animal.imageUrl || null} {...register('imageUrl', { required: true })} />
      <h5>Description</h5>
      <input defaultValue={animal.description || null} {...register('description', { required: true })} />
      <h5>Price</h5>
      <input defaultValue={animal.price || null} {...register('price', { required: true })}/>
      {errors.name && <span>This field is required</span>}
      {errors.type && <span>This field is required</span>}
      {errors.eventSpecialty && <span>This field is required</span>}
      {errors.imageUrl && <span>This field is required</span>}
      {errors.description && <span>This field is required</span>}
      {errors.price && <span>This field is required</span>}

      <button type='submit'>Submit</button>
    </form>
  );
}

EditAnimalForm.propTypes = {
  animal: PropTypes.any
};
