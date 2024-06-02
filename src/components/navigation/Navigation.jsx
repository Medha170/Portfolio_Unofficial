import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import signature from './../../assets/signature.png';

function Navigation() {
    const location = useLocation();

    return (
        <header className='nav-header'>
            <div className='sign'>
                <img src={signature} alt='signature' />
            </div>
            <nav>
                <ul className='navbar'>
                    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <span className='line'>|</span>
                    <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
