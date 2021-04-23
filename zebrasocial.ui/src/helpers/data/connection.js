import firebase from 'firebase';
import config from '../config.json';

const firebaseApp = () => {
  firebase.initializeApp(config.firebaseConfig);
};

export default firebaseApp;
