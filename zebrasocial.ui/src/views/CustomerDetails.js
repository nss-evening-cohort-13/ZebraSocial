import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getCustomersById from '../helpers/data/customerData';
import CustomerDetailsCard from '../components/Cards/CustomerDetailsCard';

const CustomerDetails = (props) => {
  const [customer, setCustomers] = useState([]);

  // const getCustomers = () => {
  //   getCustomersById.getAllCustomers().then((response) => {
  //     const customer = response;
  //     setCustomers(customer);
  //   });
  // };

  const getCustomer = (customerId) => {
    getCustomersById.getCustomerById(customerId).then((response) => {
      const singleCustomer = response;
      setCustomers(singleCustomer);
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const customerId = props.match.params.id;
    getCustomer(customerId);
  }, []);

  const showCustomers = () => (
     <CustomerDetailsCard key={customer.id} customer={customer} />
  );

  return (
    <div>
      {showCustomers()}
    </div>
  );
};

export default CustomerDetails;

CustomerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any
    })
  })
};
