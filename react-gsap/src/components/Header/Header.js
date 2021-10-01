import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="herader--inner">
                        <div className="logo">
                            <Link to={`/`}>Empresa</Link>
                        </div>

                        <div className="menu">
                            <button>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
