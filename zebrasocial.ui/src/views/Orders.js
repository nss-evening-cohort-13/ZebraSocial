import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCustomerById } from '../helpers/data/customerData';
import { getEventById, getZebraById } from '../helpers/data/eventData';
import getUid from '../helpers/data/authData';
import MyModal from '../components/AppModal';
import EditOrderForm from '../components/Forms/EditOrderForm';
import { getOrderById } from '../helpers/data/orderData';
import { getPaymentInfoById } from '../helpers/data/paymentData';
import Fail from './Fail';

export default class Orders extends Component {
  state = {
    orders: [],
    customer: [],
    event: [],
    zebra: [],
    payment: [],
  };

  componentDidMount() {
    const customerId = getUid();
    this.getCustomer(customerId);
    this.getEvent(customerId);
    this.getZebra(customerId);
    this.getOrders(customerId);
    this.getPayment(customerId);
  }

  getOrders = (customerId) => {
    if (customerId) {
      getOrderById(customerId).then((resp) => {
        this.setState({ orders: resp });
      });
    }
  }

  getCustomer = (customerId) => {
    getCustomerById(customerId).then((response) => {
      this.setState({
        customer: response
      });
    })
      .catch((err) => console.warn('nope', err));
  };

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

  getPayment = (customerId) => {
    getPaymentInfoById(customerId).then((response) => {
      this.setState({
        payment: response
      });
    })
      .catch((err) => console.warn('nope', err));
  };

  render() {
    const {
      customer, event, zebra, orders, payment
    } = this.state;
    const date = new Date(event.date);
    const price = (amount) => {
      const total = amount;
      const final = total + 0.00;
      return `$${final.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    };
    return (
      <>{ !(payment.cardNumber && payment.expMonth && payment.expYear && payment.cvv && payment.firstName && payment.lastName) || event.isPaidFor === true || event === 0 ? (
        <Fail />
      ) : (
        <div className="checkout-container">
          <h1 className="mb-5 yrCart">Your Cart</h1>
      <div className="card checkout">
    <div className="title">Order Details</div>
    <div className="info">
        <div className="row">
            <div className="col-7"> <span id="heading">Date</span><br/> <span id="details">{date.toDateString()}</span> </div>
            <div className="col-5 pull-right"> <span id="heading">Location</span><br/> <span id="details">{event.location}</span> </div>
        </div>
    </div>
    <div className="pricing">
        <div className="row">
            <div className="col-9"><big className="total">Event:</big> <span id="name">{event.name}</span> </div>
            <div className="col-3"> <span id="price">{price(event.price)}</span> </div>
        </div>
        <div className="row">
            <div className="col-9"><big className="total">Zebra:</big> <span id="name">{zebra.name}</span> </div>
            <div className="col-3"> <span id="price">{price(zebra.price)}</span> </div>
        </div>
    </div>
    <div className="total">
        <div className="row">
            <div className="col-9"><big>Total:</big></div>
            <div className="col-3"><big>{price(orders.total)}</big></div>
        </div>
    </div>
    <div className='Orders'>
          <MyModal color={'info'} buttonLabel={'Check Out'}>
                        <EditOrderForm
                          customer={customer}
                          key={customer.id}
                          event={event}
                          zebra={zebra}
                        />
                      </MyModal>
          </div>
</div>
      </div>
      )}
      </>
    );
  }
}
Orders.propTypes = {
  customer: PropTypes.any,
};
