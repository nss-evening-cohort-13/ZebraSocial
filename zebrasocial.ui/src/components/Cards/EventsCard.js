import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getZebraById } from '../../helpers/data/zebraData';
import { getCustomerById } from '../../helpers/data/customerData';

export default function EventsCard({ eve }) {
  const [animal, setAnimal] = useState([]);
  const [customer, setCustomers] = useState([]);

  const getZebra = (zebraId) => {
    if (zebraId !== 0) {
      getZebraById(zebraId).then((response) => {
        setAnimal(response);
      });
    }
  };

  const getCustomer = (customerId) => {
    getCustomerById(customerId).then((response) => {
      const singleCustomer = response;
      setCustomers(singleCustomer);
    })
      .catch((err) => console.warn('nope', err));
  };

  useEffect(() => {
    const zebra = eve.animalId;
    getZebra(zebra);
  }, [animal]);
  useEffect(() => {
    const cust = eve.customerId;
    getCustomer(cust);
  }, [customer]);

  const price = () => {
    const total = animal.price + eve.price;
    const tax = total * 0.0925;
    const final = total + tax;
    return `$${final.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  };

  const lengthConvert = () => {
    if (eve.length === 0) {
      return 'Full Day';
    } if (eve.length === 1) {
      return 'Half Day Morning';
    } if (eve.length === 2) {
      return 'Half Day Evening';
    } return 'No Length';
  };

  const date = new Date(eve.date);

  return (
      <>{eve.name === 'Deleted Event' ? (
          <> </>
      ) : (
        <div className="p-2">
        {/* first card */}
        <div className="row p-2 bg-white border rounded">
        <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={animal.imageUrl} /></div>
        <div className="col-md-6 mt-1">
            <h5>{eve.name}</h5>
            <div className="d-flex flex-row">
                <span><b>Type:</b> {eve.type}</span>
            </div>
            <div className="mt-1 mb-3 spec-1"><span>{lengthConvert()}</span><span className="dot"></span><span>{date.toDateString()}</span></div>
            <p className="text-justify  para mb-3"><b>Location:</b> {eve.location}</p>
            <div className="d-flex flex-row">
                <span><b>Animal:</b> {animal.type}</span>
            </div>
            <div className="mt-1 mb-1 spec-1 mb-2"><span>Name: {animal.name}</span><span className="dot"></span><span>Specialty: {animal.eventSpecialty}</span></div>
        </div>
        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
            <div className="d-flex flex-row align-items-center">
                <h5 className="mr-1 text-success">Total:</h5>
            </div>
            <h6 className="mb-4"> {price()}</h6>
            <hr />
            <h5>Customer:</h5>
            <Link to={'/customers'} className="d-flex flex-column mt-2 text-muted f-w-400"><Button outline color="primary" className=" mt-2" >{customer.firstName} {customer.lastName}</Button></Link>
        </div>
    </div>
    {/* end first card */}
    </div>
      )}
      </>
  );
}

EventsCard.propTypes = {
  eve: PropTypes.any,
};
