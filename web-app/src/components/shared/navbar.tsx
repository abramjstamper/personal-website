import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props: Object) => {
  return (
    <nav className='navbar is-fixed-top' role="navigation" aria-label="main navigation">
      <div id='navbarMenuHeroA' className='navbar-menu'>
        <div className='navbar-end'>
          <NavLink to='/' className='navbar-item' activeClassName='is-active'>
            Home
            </NavLink>
          <NavLink to='/timeline' className='navbar-item' activeClassName='is-active'>
            Timeline
            </NavLink>
          <NavLink to='/technologies' className='navbar-item' activeClassName='is-active'>
            Technologies
            </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;