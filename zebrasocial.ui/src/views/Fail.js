import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import getUid from '../helpers/data/authData';

export default class Fail extends Component {
  render() {
    return (
            <div >
                <div className='danger'>
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Whoops!</h4>
                    <p>It looks like you made a big oopsie</p>
                    <hr />
                    <p className="mb-0">
                    <Link to={`/customers/${getUid()}`} className='admin-animals text-muted f-w-400 p-4'>
                        <Button className="mt-3" color="danger">Click Here</Button>
                        </Link>
                        to add payment info to your profile
                    </p>
                    <p className="mb-0">
                    <Link to={'/zebras'} className='admin-animals text-muted f-w-400 p-4'>
                        <Button className="mt-3" color="warning">Click Here</Button>
                        </Link>
                        to create an event
                    </p>
                </div>
                </div>
            </div>
    );
  }
}
