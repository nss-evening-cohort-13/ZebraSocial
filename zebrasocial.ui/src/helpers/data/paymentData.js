import axios from 'axios';
import { baseUrl } from '../config.json';

const paymentUrl = `${baseUrl}/paymentInfo`;

const getPaymentInfoById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${paymentUrl}/${customerId}/payInfo`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default { getPaymentInfoById };
