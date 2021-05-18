import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getOrderById } from '../helpers/data/orderData';
// import OrderCard from '../components/Cards/OrdersCard';
import { getCustomerById } from '../helpers/data/customerData';
import getUid from '../helpers/data/authData';

export default class Orders extends Component {
  state = {
    orders: [],
    customer: [],
  };

  componentDidMount() {
    const customerId = getUid();
    this.getCustomer(customerId);
  }

  getCustomer = (customerId) => {
    getCustomerById(customerId).then((response) => {
      const custId = response.id;
      getOrderById(custId).then((resp) => {
        console.warn(resp);
      });
    })
      .catch((err) => console.warn('nope', err));
  };

  render() {
    // const { orders, customerId } = this.state;
    // const orderCardForCustomer = (
    //   orders.map((order) => <OrderCard key={order} order={this.state.order} customerId={customerId} />)
    // );
    return (
      <div>
        <h2>
          <div className='Orders'>
         {/* {orderCardForCustomer()} */}
          </div>
          </h2>
      </div>
    );
  }
}
Orders.propTypes = {
  customer: PropTypes.any,
};
