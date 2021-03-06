import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">

                <div className="main-footer-top row align-items-top ">
                    <div className="main-footer-logo col-md-2 align-self-center">
                        <a href="index.html">
                            <img className="img-fluid" src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="offset-lg-2 col-lg-2 offset-0 col-md-3 col-6">
                        <h5>navigation</h5>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">about us</Link>
                            </li>
                            <li>
                                <Link to="/industry">industry</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                        <h5>Industary</h5>
                        <ul>
                            <li>
                                <Link to="/industry">Education</Link>
                            </li>
                            <li>
                                <Link to="/industry">business</Link>
                            </li>
                            <li>
                                <Link to="/industry">realestate</Link>
                            </li>
                            <li>
                                <Link to="/industry">technology</Link>
                            </li>
                            <li>
                                <Link to="/industry">banking</Link>
                            </li>
                            <li>
                                <Link to="/industry">communication</Link>
                            </li>
                            <li>
                                <Link to="/industry">much more</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>News letter</h5>
                        <p>Enter your email address to subscribe our notification of our new post & features by email.</p>
                        <form className="main-footer-form">
                            <input type="email" placeholder="Email Address"/>
                            <button className="button-main button-footer-subscribe">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="main-footer-bottom row">
                    <div className="main-footer-copyright">
                        <p>Copyright © 2016 <a href="/">Consultplus theme.</a></p>
                    </div>
                    <ul className="main-footer-social row">
                        <li>
                            <a className="social-facebook" href="https://www.facebook.com/">Facebook</a>
                        </li>
                        <li>
                            <a className="social-twitter" href="https://twitter.com/">twitter</a>
                        </li>
                        <li>
                            <a className="social-instagram" href="https://www.instagram.com/">instagram</a>
                        </li>
                        <li>
                            <a className="social-linkedin" href="https://www.linkedin.com/">linkedin</a>
                        </li>
                        <li>
                            <a className="social-google" href="https://plus.google.com/">google +</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;