import React, { useState } from 'react';
import {Button, Link, Dropdown, Logo} from '../index.js';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Dropdown from './Dropdown';
// import Logo from "./logo.svg";
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

function Navbar(props) {

  // const extendElement = () => { dropdown ? setDropdown(false) : setDropdown(true); }

  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="Optum Logo" height='50px' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li 
            className="nav-item" 
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave} 
            onClick={props.extendElement} 
          >
            <Link
              to='/services'
              className='nav-links'
            // onClick={closeMobileMenu}
            >
              Services <i className='fa fa-caret-down' />
            </Link>
            {props.dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>} 
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;