import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductCategories from '../views/productCategories';

export default function Routes() {
  return (
           <Switch>
           <Route exact path='/Products' component={ProductCategories} />
           </Switch>
  );
}
