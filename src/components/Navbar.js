import React from 'react';
import Logo from '../media/NavbarImage.png';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'> 
            <img src={Logo} alt='nav'/>
        </div>
        <div className='rightSide'> 
            <Link to='/'> Home</Link>
            <Link to='/portfolio'> Portfolio</Link>
            <Link to='/about'> About</Link>
            
        </div>
    </div>
  )
}

export default Navbar