import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from 'hooks';

import logo from 'assets/images/logo.svg';

const Header = () => {
  const { companyName } = useSiteMetadata();
  return (
    <header className='page-header'>
      <nav className='nav'>
        <Link to='/'>
          <img src={logo} alt={`${companyName} Logo`} />
        </Link>
        <div className='nav__links'>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
