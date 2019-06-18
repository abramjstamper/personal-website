import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props: Object) => {
  return (
    <nav className='navbar is-fixed-top' role="navigation" aria-label="main navigation">
      <div id='navbarMenuHeroA' className='navbar-menu'>
        <div className='navbar-end'>
          <NavLink to='/about' className='navbar-item' activeClassName='is-active'>
            About
            </NavLink>
          <NavLink to='/experience' className='navbar-item' activeClassName='is-active'>
            Experience
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