import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCustomerById } from '../helpers/data/customerData';
import { getEventById, getZebraById } from '../helpers/data/eventData';
import getUid from '../helpers/data/authData';
import MyModal from '../components/AppModal';
import EditOrderForm from '../components/Forms/EditOrderForm';

export default class Orders extends Component {
  state = {
    orders: [],
    customer: [],
    event: [],
    zebra: [],
  };

  componentDidMount() {
    const customerId = getUid();
    this.getCustomer(customerId);
    this.getEvent(customerId);
    this.getZebra(customerId);
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

  render() {
    const { customer, event, zebra } = this.state;
    // const orderCardForCustomer = (
    //   orders.map((order) => <OrderCard key={order} order={this.state.order} customerId={customerId} />)
    // );
    return (
      <div>
        <h2>
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
          </h2>
      </div>
    );
  }
}
Orders.propTypes = {
  customer: PropTypes.any,
};
