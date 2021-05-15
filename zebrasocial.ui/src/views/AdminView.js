import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function AdminView() {
  return (
        <div>
          <h2>Admin Dashboard</h2>
            <div className="counter-container">
          <div className="container">
    <div className="row">
        <div className="four col-md-3">
            <div className="counter-box colored"> <i className="fa fa-thumbs-o-up"></i> <span className="counter">2147</span>
                <p>Happy Customers</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box"> <i className="fa fa-group"></i> <span className="counter">3275</span>
                <p>Registered Members</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box"> <i className="fa fa-shopping-cart"></i> <span className="counter">289</span>
                <p>Available Products</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box"> <i className="fa fa-user"></i> <span className="counter">1563</span>
                <p>Saved Trees</p>
            </div>
        </div>
    </div>
</div>
</div>
            <div className="adminDash">
            <Link to={'/products'} className='admin-animals text-muted f-w-400 p-4'><Button color="info">View Zebras</Button></Link>
            <Link to={'/events'} className='admin-animals text-muted f-w-400 p-4'><Button color="success">View Events</Button></Link>
            <Link to={'/customers'} className='admin-animals text-muted f-w-400 p-4'><Button color="danger">View Customers</Button></Link>
            </div>
        </div>
  );
}
