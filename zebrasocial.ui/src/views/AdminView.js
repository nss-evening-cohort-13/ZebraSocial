import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function AdminView() {
  return (
        <div>
          <h2>Admin Dashboard</h2>
          <div className="adminDash">
            <Link to={'/products'} className='admin-animals text-muted f-w-400 p-4'><Button color="info">View Zebras</Button></Link>
            <Link to={'/events'} className='admin-animals text-muted f-w-400 p-4'><Button color="success">View Events</Button></Link>
            <Link to={'/customers'} className='admin-animals text-muted f-w-400 p-4'><Button color="danger">View Customers</Button></Link>
            </div>
        </div>
  );
}
