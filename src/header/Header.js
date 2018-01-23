import React from 'react';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AboutUs from '../about-us';
import App from "../App";

const Header = () => {
    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg navbar-light container">

                <a className="navbar-brand" href="/">
                    <img src="images/logo.png" alt="logo"/>
                    <h1 className="text-over-indent">Consult plus</h1>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Router>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item active">
                            {/*<link className="nav-link" path="/">Home <span className="sr-only">(current)</span></link>*/}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="industry.html">industry</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown"
                               data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                                pages
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="blog.html">Blog</a>
                                <a className="dropdown-item" href="blog-post.html">Blog post</a>
                                <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                                <a className="dropdown-item" href="pricing.html">Pricing</a>
                                <a className="dropdown-item" href="careers.html">Careers</a>
                                <a className="dropdown-item" href="404.html">404</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact-us.html">Contact us</a>
                        </li>
                    </ul>
                </div>
                <Route path="/about" component={AboutUs} />
                <div className="top-contacts">
                    <a className="top-contacts-tel text-uppercase" href="callto:915685666455">
                        <i className="icon-call-in"></i>
                        +91 5685 6664 555
                    </a>
                    <a className="top-contacts-mail" href="mailto:info@consultplus.com">
                        <i className="icon-envelope-open"></i>
                    </a>
                </div>
             </Router>
            </nav>
        </header>
    );
};

export default Header;