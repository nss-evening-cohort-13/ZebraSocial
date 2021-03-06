import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteEvent, getEventById, getZebraById } from '../helpers/data/eventData';
import getUid from '../helpers/data/authData';

export default class EventDetails extends Component {
  state = {
    event: [],
    zebra: [],
  }

  componentDidMount() {
    const customerId = getUid();
    this.getEvent(customerId);
    this.getZebra(customerId);
  }

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

  deleteEve = (e) => {
    deleteEvent(e.target.id);
    setTimeout(() => {
      this.props.history.push('/');
    }, 500);
  }

  render() {
    const { zebra, event } = this.state;
    const date = new Date(event.date);
    const price = () => {
      const total = zebra.price + event.price;
      const tax = total * 0.0925;
      const final = total + tax;
      return `$${final.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    };
    const lengthConvert = () => {
      if (event.length === 0) {
        return 'Full Day';
      } if (event.length === 1) {
        return 'Half Day Morning';
      } if (event.length === 2) {
        return 'Half Day Evening';
      } return 'No Length';
    };
    const showDelete = (isPaidFor) => {
      if (isPaidFor) {
        return <h3 className="text-success">PAID</h3>;
      }
      return <button type="button" id={event.id} onClick={(e) => { this.deleteEve(e); } } className="btn btn-danger">Delete Event</button>;
    };
    return (
        <>{ event.customerId ? (
      <div className='eventDisplay'>
        <h1 className="mb-5">Your Event</h1>
      <div className="container event-profile">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={zebra.imageUrl} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {event.name}
                                    </h5>
                                    <p className="proile-rating">Total Cost Tax Included: <span>{price()}</span></p>
                            <hr />
                            <div>{showDelete(event.isPaidFor)}</div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <h5>About Animal</h5>
                            <p><b>Name: </b> {zebra.name}</p>
                            <p><b>Type: </b> {zebra.type}</p>
                            <p><b>Specialty: </b> {zebra.eventSpecialty}</p>
                            <p><b>Description: </b> {zebra.description}</p>
                            <p><b>Price: </b> ${zebra.price}</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Event Type:</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>{event.type}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Date:</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>{date.toDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Length:</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>{lengthConvert()}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Location:</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>{event.location}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label>Price:</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>${event.price}</p>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>) : (
            <div>
                <h2> Please Add An Event</h2>
            </div>
        )}
        </>
    );
  }
}

EventDetails.propTypes = {
  event: PropTypes.any,
  user: PropTypes.any,
  history: PropTypes.shape({
    push: PropTypes.any
  })
};
