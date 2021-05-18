import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from '../searchBar';
import getUid from '../../helpers/data/authData';

export default function VerticalNavbar({ userDetails }) {
  const history = useHistory();
  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    history.push('/');
    window.location.reload();
  };

  const showIfAdmin = () => {
    if (userDetails.isAdmin === true) {
      return (<li><Link to='/admin'><i className="fas fa-user-cog"></i> Admin</Link></li>);
    }
    return '';
  };

  useEffect(() => {
    showIfAdmin();
  }, []);

  return (
    <>
    <div className='my-nav '>
      <div className='nav-items'>
        <div className='nav-brand'>
          <Link to='/'>Navigation</Link>
        </div>
        <ul className='nav-links'>
          <SearchBar />
          <li><Link to='/'><i className="fas fa-home icon"></i> Home</Link></li>
          <li><Link to='/zebras'><i className="fas fa-horse icon"></i> Rent An Animal</Link></li>
          <li><Link to={`/orders/${getUid()}`}><i className="fas fa-shopping-cart icon"></i > Cart</Link></li>
          <li><Link to={`/customers/${getUid()}`}><i className="fas fa-user-friends icon"></i> My Profile</Link></li>
          {showIfAdmin()}
        </ul>
      </div>
      <div className='nav-link btn btn-danger' onClick={(e) => logMeOut(e)}>Logout</div>
      </div>
  </>
  );
}

VerticalNavbar.propTypes = {
  user: PropTypes.any,
  userDetails: PropTypes.any,
};
