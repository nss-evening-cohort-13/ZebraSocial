import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from '../components/myNavbar';
import './App.scss';
import fbConnection from '../helpers/data/fbConnection';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
    uid: [],
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => window.sessionStorage.setItem('token', token));

        this.setState({ user });
        this.setState({ uid: user.uid });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user, uid } = this.state;
    return (
    <div className='App'>
      <Router>
        <VerticalNavbar user={user} uid={ uid } />
        <Routes user={user} />
      </Router>
    </div>
    );
  }
}

export default App;
