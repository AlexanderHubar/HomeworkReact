import React from 'react';

import Banner from './Components/sections/Banner';
import Testimonials from './Components/sections/TestimonialsSection';

class Industry extends React.Component {

    render() {
        return (
            <div>
                <Banner text={'industry'} />
                <section className="choose-industry-section">
                    <div className="container">
                        <h3>choose your industry</h3>
                        <ul className="row industry-card-list">
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-business.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>Business</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-education.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>Education</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-technology.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>technology</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-real-estate.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>real estate</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-telecommunication.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>telecommunication</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-banking-financial.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>banking &amp; financial</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-law.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>Law</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="industry-card">
                                    <div className="industry-card-img">
                                        <img src="images/industry-construction.png" alt="industry-business" />
                                    </div>
                                    <div className="industry-card-info">
                                        <h5>Construction</h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <button className="button-main button-industry">Choose your service</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <Testimonials />
            </div>
        )
    }
}

export default Industry;
