import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getAllEvents } from '../helpers/data/eventData';
import productData from '../helpers/data/productData';
import { getAllCustomers } from '../helpers/data/customerData';

export default class AdminView extends Component {
  state = {
    events: [],
    animals: [],
    customers: [],
  }

  componentDidMount() {
    this.getEvents();
    this.getAnimals();
    this.getCustomers();
  }

  getEvents = () => {
    getAllEvents().then((response) => {
      const array = [];
      response.forEach((event) => {
        if (event.customerId !== null) {
          array.push(event);
        }
      });
      this.setState({
        events: array
      });
    });
  }

  getAnimals = () => {
    productData.getAllAnimalProducts()
      .then((response) => this.setState({ animals: response }));
  }

  getCustomers = () => {
    getAllCustomers().then((response) => {
      this.setState({
        customers: response
      });
    });
  }

  render() {
    const { animals, events, customers } = this.state;
    return (
        <div>
          <h2 className="admin-head">Admin Dashboard</h2>
            <div className="counter-container">
          <div className="container">
    <div className="row">
        <div className="four p-4">
            <div className="counter-box anim"> <i className="fas fa-horse"></i> <span className="counter">{Object.keys(animals).length}</span>
                <p>Animals</p>
                <Link to={'/products'} className='admin-animals text-muted f-w-400 p-4'><Button className="mt-3" color="danger">View Animals</Button></Link>
            </div>
        </div>
        <div className="four p-4">
            <div className="counter-box event"> <i className="far fa-calendar-alt"></i> <span className="counter">{Object.keys(events).length}</span>
                <p>Events</p>
                <Link to={'/events'} className='admin-animals text-muted f-w-400 p-4'><Button className="mt-3" color="info">View Events</Button></Link>
            </div>
        </div>
        <div className="four p-4">
            <div className="counter-box customer"> <i className="fas fa-users"></i> <span className="counter">{Object.keys(customers).length}</span>
                <p>Members</p>
                <Link to={'/customers'} className='admin-animals text-muted f-w-400 p-4'><Button className="mt-3" color="success">View Members</Button></Link>
            </div>
        </div>
    </div>
</div>
</div>
        </div>
    );
  }
}
