import React from 'react';
import logo from '../../images/programming-hero-web-logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/dashboard">dashboard</a>
                    <a href="/login">Login</a>
                </nav>
            </div>
            
        </div>
    );
};

export default Header;