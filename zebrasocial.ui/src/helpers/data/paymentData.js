import axios from 'axios';
import { baseUrl } from '../config.json';

const paymentUrl = `${baseUrl}/paymentInfo`;

const getPaymentInfoById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${paymentUrl}/${customerId}/payInfo`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { getPaymentInfoById };
