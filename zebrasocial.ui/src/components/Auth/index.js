import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends Component {
    loginClickEvent = (e) => {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
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
