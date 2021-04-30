import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCustomerById } from '../helpers/data/customerData';
import { getPaymentInfoById } from '../helpers/data/paymentData';
import CustomerDetailsCard from '../components/Cards/CustomerDetailsCard';

const CustomerDetails = (props) => {
  const [customer, setCustomers] = useState([]);
  const [payment, setPayments] = useState([]);

  const getCustomer = (customerId) => {
    getCustomerById(customerId).then((response) => {
      const singleCustomer = response;
      setCustomers(singleCustomer);
    })
      .catch((err) => console.warn('nope', err));
  };
  const getPayment = (customerId) => {
    getPaymentInfoById(customerId).then((response) => {
      const paymentInfo = response;
      setPayments(paymentInfo);
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const customerId = props.match.params.id;
    getCustomer(customerId);
    getPayment(customerId);
  }, []);

  const showCustomers = () => (
     <CustomerDetailsCard key={customer.id} customer={customer} payment={payment} />
  );
  console.log(props.user);
  return (
    <>{ props.user ? (
      <div>
      {showCustomers()}
    </div>
    ) : (
      <div>
        {showCustomers()}
      </div>
    )}
    </>
  );
};

export default CustomerDetails;

CustomerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any
    })
  }),
  user: PropTypes.any
};
