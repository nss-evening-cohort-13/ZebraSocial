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

const checkIfUserExistsInFirebase = (user) => {
  axios
    .get(customerUrl)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios.post(customerUrl, user);
      } else {
        console.warn('User Already Exists');
      }
      window.sessionStorage.setItem('ua', true);
    })
    .catch((error) => console.error(error));
};

const setCurrentUser = (userObj) => {
  const fullName = userObj.displayName;
  const onlyFirst = fullName.split(' ').slice(0, -1).join(' ');
  const onlyLast = fullName.split(' ').slice(-1).join(' ');
  const user = {
    firstName: onlyFirst,
    lastName: onlyLast,
    email: userObj.email,
    imageUrl: userObj.photoURL,
    firebaseId: userObj.uid,
  };
  const loggedIn = window.sessionStorage.getItem('ua');
  if (!loggedIn) {
    checkIfUserExistsInFirebase(user);
  }
  return user;
};

export {
  getCustomerById, getAllCustomers, updateCustomerInfo, setCurrentUser
};
