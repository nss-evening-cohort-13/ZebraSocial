import React, { Component } from 'react';
import getOrderById from '../helpers/data/orderData';
import { getEventById, getZebraById } from '../helpers/data/eventData';
import OrderCard from '../components/Cards/OrdersCard';
import getUid from '../helpers/data/authData';

export default class Orders extends Component {
  state = {
    orders: [],
    events: [],
  };

  componentDidMount() {
    const customerId = getUid();
    this.getEvent(customerId);
    this.getZebra(customerId);
    this.getOrder(customerId);
  }

  getOrder = (orderId) => {
    getOrderById(orderId).then((response) => {
      this.setState({
        order: response,
      });
    });
  }

  getEvent = (customerId) => {
    getEventById(customerId).then((response) => {
      this.setState({
        event: response,
      });
    })
      .catch((err) => console.warn('nope', err));
  };

  getZebra = (zebraId) => {
    getZebraById(zebraId).then((response) => {
      this.setState({
        zebra: response,
      });
    });
  }

  render() {
    const { orders, events } = this.state;
    const orderCardForCustomer = (
      orders.map((order) => <OrderCard key={order.customerId} event={events.customerId}/>)
    );
    return (
      <div>
        <h2>
          <div className='Orders'>
          {orderCardForCustomer()}
          </div>
          </h2>
      </div>
    );
  }
}
