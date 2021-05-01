import React, { Component } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import { baseUrl } from '../../helpers/config.json';
import 'firebase/auth';

const customerUrl = `${baseUrl}/Customers`;

export default class Auth extends Component {
    loginClickEvent = (e) => {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((cred) => {
        const user = cred.additionalUserInfo.profile;
        if (cred.additionalUserInfo.isNewUser) {
          const userInfo = {
            firstName: user.family_name,
            lastName: user.given_name,
            email: user.email,
            imageUrl: user.picture,
            firebaseId: cred.user.uid,
          };
          axios.post(customerUrl, userInfo);
        }
      });
    };

    render() {
      return (
      <div className="Auth d-flex justify-content-center">
        <button className="btn" onClick={this.loginClickEvent}>
          <img src='https://www.socialmedianews.com.au/wp-content/uploads/2013/02/googleplussignin.png' alt="Google Sign In Button" />
        </button>
      </div>
      );
    }
}
