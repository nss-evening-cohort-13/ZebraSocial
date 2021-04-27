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

const updateCustomerInfo = (customerId, updatedCustomer) => axios.put(`${customerUrl}/${customerId}/update`, updatedCustomer);

export { getCustomerById, getAllCustomers, updateCustomerInfo };
