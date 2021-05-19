import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCustomerById } from '../helpers/data/customerData';
import { getEventById, getZebraById } from '../helpers/data/eventData';
import getUid from '../helpers/data/authData';
import MyModal from '../components/AppModal';
import EditOrderForm from '../components/Forms/EditOrderForm';
import { getOrderById } from '../helpers/data/orderData';
import { getPaymentInfoById } from '../helpers/data/paymentData';

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
    console.log(payment);
    return (
      <>
      <div className="card checkout">
    <div className="title">Purchase Reciept</div>
    <div className="info">
        <div className="row">
            <div className="col-7"> <span id="heading">Date</span><br/> <span id="details">{date.toDateString()}</span> </div>
            <div className="col-5 pull-right"> <span id="heading">Order No.</span><br/> <span id="details">{orders.id}</span> </div>
        </div>
    </div>
    <div className="pricing">
        <div className="row">
            <div className="col-9"> <span id="name">{event.name}</span> </div>
            <div className="col-3"> <span id="price">{event.price}</span> </div>
        </div>
        <div className="row">
            <div className="col-9"> <span id="name">{zebra.name}</span> </div>
            <div className="col-3"> <span id="price">{zebra.price}</span> </div>
        </div>
    </div>
    <div className="total">
        <div className="row">
            <div className="col-9"></div>
            <div className="col-3"><big>{orders.total}</big></div>
        </div>
    </div>
    <div className='Orders'>
          <MyModal color={'info'} buttonLabel={'Submit'}>
                        <EditOrderForm
                          customer={customer}
                          key={customer.id}
                          event={event}
                          zebra={zebra}
                        />
                      </MyModal>
          </div>
</div>
      </>
    );
  }
}
Orders.propTypes = {
  customer: PropTypes.any,
};
