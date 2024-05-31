import React from 'react';
import './Navigation.css';
import signature from './../../assets/signature.png';
function Navigation() {
    return (
        <header>
            <div className='sign'>
                <img src={signature} alt='signature' />
            </div>
            <nav>
                <ul className='navbar'>
                    <li className='nav-item'>
                        <a href="#home">HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact">CONTACT</a>
                    </li>
                    <span className='line'>|</span>
                    <li className='nav-item'>
                        <a href="#about">ABOUT</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;