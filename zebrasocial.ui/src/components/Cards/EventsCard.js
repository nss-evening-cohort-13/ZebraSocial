import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getZebraById } from '../../helpers/data/zebraData';

export default function EventsCard({ eve }) {
  const [animal, setAnimal] = useState([]);

  const getZebra = (zebraId) => {
    if (zebraId !== 0) {
      getZebraById(zebraId).then((response) => {
        setAnimal(response);
      });
    }
  };

  useEffect(() => {
    const zebra = eve.animalId;
    getZebra(zebra);
  }, [animal]);

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
                <span><b>Animal:</b> {animal.name}</span>
            </div>
            <div className="mt-1 mb-1 spec-1 mb-2"><span>{animal.type}</span><span className="dot"></span><span>{animal.eventSpecialty}</span></div>
        </div>
        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
            <div className="d-flex flex-row align-items-center">
                <h5 className="mr-1 text-success">Total:</h5>
            </div>
            <h6 className=""> {price()}</h6>
            <div className="d-flex flex-column mt-4"><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
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
