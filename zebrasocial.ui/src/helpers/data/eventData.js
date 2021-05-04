import axios from 'axios';
import { baseUrl } from '../config.json';

const eventUrl = `${baseUrl}/events`;

const addEvent = (eventObject) => axios.post(eventUrl, eventObject);

// eslint-disable-next-line import/prefer-default-export
export { addEvent };
