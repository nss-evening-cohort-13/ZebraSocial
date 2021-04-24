import axios from 'axios';
import { baseUrl } from '../config.json';

const customerUrl = `${baseUrl}/Customers`;

const getCustomerById = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${customerUrl}/${customerId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getAllCustomers = () => new Promise((resolve, reject) => {
  axios
    .get(customerUrl)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

export default { getCustomerById, getAllCustomers };
