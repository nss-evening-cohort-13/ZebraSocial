import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from '../components/myNavbar';
import './App.scss';
import fbConnection from '../helpers/data/fbConnection';
import { setCurrentUser } from '../helpers/data/customerData';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
    userId: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        user
          .getIdToken()
          .then((token) => window.sessionStorage.setItem('token', token));

        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
    const getUid = () => firebase.auth().currentUser?.uid;
    const userId = getUid();
    this.setState({
      userId
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user, userId } = this.state;
    return (
    <div className='App'>
      <Router>
        <VerticalNavbar user={user} userId={userId} />
        <Routes user={user} />
      </Router>
    </div>
    );
  }
}

export default App;
