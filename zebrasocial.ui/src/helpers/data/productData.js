import axios from 'axios';
import { baseUrl } from '../config.json';

const AnimalsUrl = `${baseUrl}/Animals`;
const EventsUrl = `${baseUrl}/Events`;

const getAllAnimalProducts = () => new Promise((resolve, reject) => axios.get(AnimalsUrl).then((response) => resolve(response.data))
  .catch((error) => reject(error)));

const getAllEventProducts = () => new Promise((resolve, reject) => axios.get(EventsUrl).then((response) => resolve(response.data))
  .catch((error) => reject(error)));

const getSearchedProducts = (searchTerm) => new Promise((resolve, reject) => axios
  .get(`${AnimalsUrl}`).then((response) => {
    const searched = response.data.filter((animal) => animal.name.toLowerCase().includes(searchTerm));
    resolve(searched);
  }).catch((error) => reject(error)));

export default { getAllAnimalProducts, getAllEventProducts, getSearchedProducts };
