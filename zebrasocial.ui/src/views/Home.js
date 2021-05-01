import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../components/Auth';

export default function Home({ user }) {
  const loadComponent = () => {
    let component = '';
    if (!user) {
      component = <Auth />;
    }
    return component;
  };
  return (
    <div>
      <h2>Home</h2>
      {loadComponent()}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
