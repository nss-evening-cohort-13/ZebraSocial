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

export { addEvent, getEventById, getZebraById };
