import React, { Component } from 'react';

export default class Success extends Component {
  render() {
    return (
            <div >
                <div className='success'>
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Thank You!</h4>
                    <p>Your payment has been recieved and your event is in the works!</p>
                    <hr />
                    <p className="mb-0">We will contact you to about a week prior to the event to make sure everything is ready.</p>
                </div>
                </div>
            </div>
    );
  }
}
