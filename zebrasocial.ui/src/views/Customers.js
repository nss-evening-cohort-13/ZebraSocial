import React, { Component } from 'react';
import { getAllCustomers } from '../helpers/data/customerData';
import AdminCustomers from '../components/Cards/AdminCustomers';

export default class Customers extends Component {
  state = {
    customers: [],
  }

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = () => {
    getAllCustomers().then((response) => {
      this.setState({
        customers: response
      });
    });
  }

  render() {
    const { customers } = this.state;
    const showCustomers = () => (
      customers.map((customer) => <AdminCustomers key={customer.firebaseKey} customer={customer} />)
    );
    return (
      <div>
      <div className="adminContainer d-flex flex-wrap">
        {showCustomers()}
      </div>
      </div>
    );
  }
}
