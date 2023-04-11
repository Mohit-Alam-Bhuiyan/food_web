import React from 'react';
import logo from '../../images/logo1.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
              <a href="/food">Foods</a>
              <a href="/orders">Orders</a>
              <a href="/catagory">Catagory</a>
              <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;