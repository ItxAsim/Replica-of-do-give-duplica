import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">give</h1>
                <nav>
                    <ul className="nav-links">
                        <li className="dropdown">
                            <button
                                className="nav-item dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                For Donors
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdown-item" type="button">Discover fundRaiser</button></li>
                                <li><button className="dropdown-item" type="button">Donate to NGOS</button></li>
                                <li><button className="dropdown-item" type="button">Monthly Missions</button></li>
                            </ul>
                        </li>
                        <li><a href="#CSR" className="nav-item">CSR</a></li>
                        <li><a href="#DiscoverNGOS" className="nav-item">Discover NGOs</a></li>
                        <li className="dropdown">
                            <button
                                className="nav-item dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                About
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><button className="dropdown-item" type="button">Our Story</button></li>
                                <li><button className="dropdown-item" type="button">Join Us</button></li>
                                <li><button className="dropdown-item" type="button">Blog</button></li>
                            </ul>
                        </li>
                        <l1>
                            <div className="header-buttons">
                                <button className="fundraiser-btn">Start a fundraiser</button>
                                <button className="login-btn">Login</button>
                            </div>
                        </l1>

                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
