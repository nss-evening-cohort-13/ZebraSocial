import axios from 'axios';
import { baseUrl } from '../config.json';

const ordersUrl = `${baseUrl}/Orders`;

const addOrder = (ordersObject) => axios.post(ordersUrl, ordersObject);

const getOrderById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${ordersUrl}/${customerId}/Orders`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export { getOrderById, addOrder };
