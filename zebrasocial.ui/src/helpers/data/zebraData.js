import axios from 'axios';
import { baseUrl } from '../config.json';

const zebraUrl = `${baseUrl}/Animals`;

const getZebraById = (zebraId) => new Promise((resolve, reject) => {
  axios.get(`${zebraUrl}/${zebraId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default getZebraById;
