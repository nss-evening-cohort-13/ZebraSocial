import React from 'react';
import { Link } from 'react-router-dom';

export default function VerticalNavbar() {
  return (
    <>
    <div className='my-nav'>
      <div className='nav-items'>
        <div className='nav-brand'>
          <Link to='/'>Navigation</Link>
        </div>
        <ul className='nav-links'>
          <li><Link to='/home'><i className="fas fa-home icon"></i>Home</Link></li>
          <li><Link to='/rent'><i className="fas fa-horse icon"></i>Rent An Animal</Link></li>
          <li><Link to='/cart'><i className="fas fa-shopping-cart icon"></i>Cart</Link></li>
          <li><Link to='/customers/:id'><i className="fas fa-user-friends icon"></i>My Profile</Link></li>
        </ul>
      </div>
      </div>
  </>
  );
}
