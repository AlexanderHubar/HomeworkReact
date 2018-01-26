import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <header className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light container">

                    <Link className="navbar-brand" to="/">
                        <img src="images/logo.png" alt="logo"/>
                        <h1 className="text-over-indent">Consult plus</h1>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto text-uppercase">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">about us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/industry">industry</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-contacts">
                        <a className="top-contacts-tel text-uppercase" href="callto:915685666455">
                            <i className="icon-call-in"></i>
                            +91 5685 6664 555
                        </a>
                        <a className="top-contacts-mail" href="mailto:info@consultplus.com">
                            <i className="icon-envelope-open"></i>
                        </a>
                    </div>
                </nav>
            </header>
    );
};

export default Header;