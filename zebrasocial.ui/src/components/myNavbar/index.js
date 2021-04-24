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
          <li><Link to='/'><i className="fas fa-home icon"></i>Home</Link></li>
          <li><Link to='/zebras'><i className="fas fa-horse icon"></i>Rent An Animal</Link></li>
          <li><Link to='/orders/:id'><i className="fas fa-shopping-cart icon"></i>Cart</Link></li>
          <li><Link to='/customers/1'><i className="fas fa-user-friends icon"></i>My Profile</Link></li>
        </ul>
      </div>
      </div>
  </>
  );
}
