import React from 'react';
import Image from '../carousel/clientCarousel/TestimonialsCarouselImage';
import Button from '../button/button';

const carouselImageData = [
    {
        link: '/',
        image: 'images/about-us-logo1.png',
        alt: 'about-us-logo'
    },
    {
        link: '/',
        image: 'images/about-us-logo2.png',
        alt: 'about-us-logo'
    },
    {
        link: '/',
        image: 'images/about-us-logo3.png',
        alt: 'about-us-logo'
    },
    {
        link: '/',
        image: 'images/about-us-logo4.png',
        alt: 'about-us-logo'
    },
    {
        link: '/',
        image: 'images/about-us-logo5.png',
        alt: 'about-us-logo'
    },
    {
        link: '/',
        image: 'images/about-us-logo2.png',
        alt: 'about-us-logo'
    },
    {
        link: '/',
        image: 'images/about-us-logo3.png',
        alt: 'about-us-logo'
    }
];

const About = () => {
    return (
        <section className="about-us-section text-center">
            <h3>About us</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type
                and scrambled.</p>
            <Button link={"about-us.html"} nameClass={"button-main button-main-margin"} text={'Read More'}/>

            <div className="container about-carousel">
                <ul id="aboutCarousel">

                    {
                        carouselImageData.map((element, index) => {
                            return (
                                <Image link={element.link} image={element.image} alt={element.alt} key={index}/>
                            )
                        })
                    }

                </ul>
            </div>
        </section>
    );
};

export default About;