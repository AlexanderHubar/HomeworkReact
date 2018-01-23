import React from 'react';

import Banner from './Components/sections/Banner';
import Testimonials from './Components/sections/TestimonialsSection';

class AboutUs extends React.Component {

    render() {
        return (
            <div>
                <Banner text={'about us'} />
                <section className="about-us-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h3>About us</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                                <h3>Vision</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                <h3>mission</h3>
                                <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                            </div>
                            <div className="col-md-5">
                                <div className="about-us-video-section">
                                    <iframe src="https://www.youtube.com/embed/jlWMTNZNOc0" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                                <div className="form-about-us">
                                    <h4>FREE Consultation</h4>
                                    <form className="form-default container no-padding">
                                        <div className="row">
                                            <div className="col-6">
                                                <input type="text" placeholder="name" />
                                            </div>
                                            <div className="col-6">
                                                <input type="email" placeholder="email" />
                                            </div>
                                        </div>
                                        <textarea rows="4" placeholder="Comment"></textarea>
                                        <button className="button-main button-second-margin">Submit Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us-page-card text-center">
                    <div className="container">
                        <ul className="row">
                            <li className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src="images/about-us-page-our-team.png" alt="Card" />
                                        <div className="card-block">
                                            <h4 className="card-title">Our Team</h4>
                                            <p className="card-text">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                            <a href="#" className="button-main">our team</a>
                                        </div>
                                </div>
                            </li>
                            <li className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src="images/about-us-page-careers.png" alt="Card" />
                                        <div className="card-block">
                                            <h4 className="card-title">Careers</h4>
                                            <p className="card-text">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                            <a href="#" className="button-main">join team</a>
                                        </div>
                                </div>
                            </li>
                            <li className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src="images/about-us-page-services.png" alt="Card" />
                                        <div className="card-block"><h4 className="card-title">Services</h4><p className="card-text">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                            <a href="#" className="button-main">Full services</a>
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

export default AboutUs;
