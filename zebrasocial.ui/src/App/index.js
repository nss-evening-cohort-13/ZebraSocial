import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from '../components/myNavbar';
import { getCustomerById } from '../helpers/data/customerData';
import './App.scss';
import fbConnection from '../helpers/data/fbConnection';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
    userDetails: {},
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => window.sessionStorage.setItem('token', token));

        this.setState({ user });
        getCustomerById(user.uid).then((response) => {
          this.setState({ userDetails: response });
        });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user, userDetails } = this.state;
    return (
    <div className='App'>
      <Router>
        <VerticalNavbar user={user} userDetails={userDetails} />
        <Routes user={user} userDetails={userDetails} />
      </Router>
    </div>
    );
  }
}

export default App;
