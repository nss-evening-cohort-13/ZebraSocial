import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomerDetails from '../views/CustomerDetails';
import Customers from '../views/Customers';
import EventDetails from '../views/EventDetails';
import Events from '../views/Events';
import Home from '../views/Home';
import OrderDetails from '../views/OrderDetails';
import Orders from '../views/Orders';
import PaymentInfo from '../views/PaymentInfo';
import ZebraDetails from '../views/ZebraDetails';
import Zebras from '../views/Zebras';
import ProductCategories from '../views/productCategories';
import SearchResults from '../views/searchResults';

import { getCustomerById } from './data/customerData';
import { getEventById } from './data/eventData';
import getUid from './data/authData';
// stupid routes

export default function Routes({ user }) {
  const [customer, setCustomers] = useState([]);
  const [event, setEvents] = useState([]);

  const getCustomer = () => {
    const customerId = getUid();
    getCustomerById(customerId).then((response) => {
      const singleCustomer = response;
      setCustomers(singleCustomer);
    })
      .catch((err) => console.warn('nope', err));
  };

  const getEvent = () => {
    const customerId = getUid();
    getEventById(customerId).then((response) => {
      const eventInfo = response;
      setEvents(eventInfo);
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    // const customerId = getUid();
    getCustomer();
  }, [customer]);

  useEffect(() => {
    getEvent();
  }, [event]);
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user} />} />
      <Route exact path='/zebras' component={() => <Zebras user={user} customer={customer} />} />
      <Route exact path='/zebras/:id' component={ZebraDetails} />
      <Route exact path='/paymentinfo' component={PaymentInfo} />
      <Route exact path='/orders' component={Orders} />
      <Route exact path='/Products' component={ProductCategories} />
      <Route exact path='/orders/:id' component={OrderDetails} />
      <Route exact path='/events' component={Events} />
      <Route exact path='/events/:id' component={(props) => <EventDetails user={user} event={event} {...props} />} />
      <Route exact path='/customers' component={Customers} />
      <Route exact path='/search/:term' component={(props) => <SearchResults {...props}/>} />
      <Route exact path='/customers/:id' component={() => <CustomerDetails user={user} customer={customer} />}/>
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
