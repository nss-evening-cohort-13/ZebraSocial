import React from 'react';
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
// stupid routes

export default function Routes({ user }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user} />} />
      <Route exact path='/zebras' component={Zebras} />
      <Route exact path='/zebras/:id' component={ZebraDetails} />
      <Route exact path='/paymentinfo' component={PaymentInfo} />
      <Route exact path='/orders' component={Orders} />
      <Route exact path='/Products' component={ProductCategories} />
      <Route exact path='/orders/:id' component={OrderDetails} />
      <Route exact path='/events' component={Events} />
      <Route exact path='/events/:id' component={EventDetails} />
      <Route exact path='/customers' component={Customers} />
      <Route exact path='/customers/:id' component={CustomerDetails} user={user}/>
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
