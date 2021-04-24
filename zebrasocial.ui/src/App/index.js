import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from '../components/myNavbar';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Router>
    <VerticalNavbar />
    <Routes/>
    </Router>
    <h2>Zebra Social</h2>
    </div>
  );
}

export default App;
