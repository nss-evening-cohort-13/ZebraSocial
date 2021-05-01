import axios from 'axios';
import { baseUrl } from '../config.json';

const paymentUrl = `${baseUrl}/paymentInfo`;

const getPaymentInfoById = (paymentId) => new Promise((resolve, reject) => {
  axios.get(`${paymentUrl}/${paymentId}/payInfo`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const updatePaymentInfo = (paymentId, updatedPayment) => axios.put(`${paymentUrl}/${paymentId}/update`, updatedPayment);

export { getPaymentInfoById, updatePaymentInfo };
