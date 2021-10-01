import React from 'react';
import { Link } from 'react-router-dom';
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="header--inner">
                        <div className="logo">
                            <Link to={`/`}>Empresa</Link>
                        </div>
                                                                                                                        
                        <div className="menu">
                            <button>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
            <HamburguerMenu/>
        </header>
    );
}

export default Header;
