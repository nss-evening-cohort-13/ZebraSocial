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
import AdminView from '../views/AdminView';
import SearchResults from '../views/searchResults';
import Success from '../views/Success';
import Fail from '../views/Fail';
import { getCustomerById } from './data/customerData';
import { getEventById } from './data/eventData';
import getUid from './data/authData';
// stupid routes

export default function Routes({ user, userDetails }) {
  const [customer, setCustomers] = useState([]);
  const [event, setEvents] = useState([]);

  const getCustomer = (customerId) => {
    getCustomerById(customerId).then((response) => {
      const singleCustomer = response;
      setCustomers(singleCustomer);
    })
      .catch((err) => console.warn('nope', err));
  };

  const getEvent = (customerId) => {
    getEventById(customerId).then((response) => {
      const eventInfo = response;
      setEvents(eventInfo);
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const customerId = getUid();
    if (customerId) {
      getCustomer(customerId);
    }
  }, [customer]);

  useEffect(() => {
    const customerId = getUid();
    if (customerId) {
      getEvent(customerId);
    }
  }, [event]);
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user} />} />
      <Route exact path='/zebras' component={() => <Zebras user={user} customer={customer} />} />
      <Route exact path='/zebras/:id' component={ZebraDetails} />
      <Route exact path='/paymentinfo' component={PaymentInfo} />
      <Route exact path='/orders/:id' component={Orders} />
      <PrivateRoute exact path='/Products' component={ProductCategories} user={user} userDetails={userDetails} />
      <PrivateRoute exact path='/admin' component={AdminView} user={user} userDetails={userDetails} />
      <PrivateRoute exact path='/events' component={Events} user={user} userDetails={userDetails} />
      <PrivateRoute exact path='/customers' component={Customers} user={user} userDetails={userDetails} />
      <Route exact path='/orderDetails/' component={OrderDetails} />
      <Route exact path='/events/:id' component={(props) => <EventDetails user={user} event={event} {...props} />} />
      <Route exact path='/search/:term' component={(props) => <SearchResults {...props}/>} />
      <Route exact path='/customers/:id' component={() => <CustomerDetails user={user} customer={customer} />}/>
      <Route exact path='/success' component={Success} />
      <Route exact path='/fail' component={Fail} />
    </Switch>
  );
}

const PrivateRoute = ({
  component: Component, user, userDetails, ...rest
}) => {
  const routeChecker = (route) => ((user && userDetails.isAdmin === true)
    ? (<Component {...route} user={user} />)
    : (<div className='error p-5'>
        <h1>401</h1>
          <h5>Admin Required</h5>
       </div>));
  return <Route {...rest} render={(props) => routeChecker(props) } />;
};

Routes.propTypes = {
  user: PropTypes.any,
  userDetails: PropTypes.any
};

PrivateRoute.propTypes = {
  userDetails: PropTypes.any,
  user: PropTypes.any,
  component: PropTypes.any,
};
