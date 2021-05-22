import axios from 'axios';
import { baseUrl } from '../config.json';

const eventUrl = `${baseUrl}/events`;

const addEvent = (eventObject) => axios.post(eventUrl, eventObject);

const getEventById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${eventUrl}/${customerId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getZebraById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${eventUrl}/${customerId}/animal`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const deleteEvent = (id) => axios.delete(`${eventUrl}/${id}`);

const getAllEvents = () => new Promise((resolve, reject) => {
  axios.get(eventUrl).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const updateEventInfo = (eventId, updatedEvent) => axios.put(`${eventUrl}/${eventId}/update`, updatedEvent);

export {
  addEvent, getEventById, getZebraById, deleteEvent, getAllEvents, updateEventInfo
};
