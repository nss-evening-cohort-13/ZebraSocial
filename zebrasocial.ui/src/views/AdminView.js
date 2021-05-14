import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function AdminView() {
  return (
        <div>
            <Link to={'/products'} className='admin-animals text-muted f-w-400'><Button color="info">View Zebras</Button></Link>
            <Link to={'/events'} className='admin-animals text-muted f-w-400'><Button color="success">View Events</Button></Link>
            <Link to={'/customers'} className='admin-animals text-muted f-w-400'><Button color="danger">View Customers</Button></Link>
        </div>
  );
}
