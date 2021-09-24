import React from 'react';
import logo from '../../images/logo.png';
import css from './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={logo} alt="" />
            <nav className='navbar'>
                <a className='navpoint' href='/shop'>Shop </a>
                <a className='navpoint' href='/orders'>Order Review </a>
                <a className='navpoint' href='/inventory'>Manage Inventory</a>

            </nav>

        </div>
    );
};

export default Header;