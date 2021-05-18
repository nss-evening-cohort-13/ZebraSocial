import axios from 'axios';
import { baseUrl } from '../config.json';

const ordersUrl = `${baseUrl}/Orders`;

const getOrderById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${ordersUrl}/${customerId}/Orders`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { getOrderById };
