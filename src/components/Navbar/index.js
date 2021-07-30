import React, { useState } from 'react';

import { Button } from './components/Button';
import { Link } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Logo from "./components/logo.svg";
import './components/Navbar.css';

function App(props) {
    // const extendElement = () => { dropdown ? setDropdown(false) : setDropdown(true); }
    // const [dropdown, setDropdown] = useState(false);

    //  const onMouseEnter = () => {
    //     if (window.innerWidth < 960) {
    //       setDropdown(false);
    //     } else {
    //       setDropdown(true);
    //     }
    //   };
    
    //    const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
    //       setDropdown(false);
    //     } else {
    //       setDropdown(false);
    //     }
    //   };

      // return (
      //   <nav className='navbar'>
      //     {children}
      //   </nav>
      // );
}

export {Button, Link, App, Dropdown, Logo};