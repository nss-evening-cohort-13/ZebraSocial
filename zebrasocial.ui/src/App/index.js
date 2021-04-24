import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import VerticalNavbar from '../components/myNavbar';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Router>
    <VerticalNavbar />
    </Router>
    <h2>Zebra Social</h2>
    </div>
  );
}

export default App;
