import React from 'react';

import AboutCard from '../card/aboutCard';

const CardData = [
    {
        imageSrc: 'images/about-us-page-our-team.png',
        alt: 'Card',
        title: 'Our Team',
        text: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy/',
        buttonLink: '/',
        buttonText: 'our team'
    },
    {
        imageSrc: 'images/about-us-page-careers.png',
        alt: 'Card',
        title: 'Careers',
        text: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        buttonLink: '/',
        buttonText: 'join team'
    },
    {
        imageSrc: 'images/about-us-page-services.png',
        alt: 'Card',
        title: 'Services',
        text: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        buttonLink: '/',
        buttonText: 'Full services'
    }
];

class AboutCards extends React.Component {
    render () {
        return (
            <section className="about-us-page-card text-center">
                <div className="container">
                    <ul className="row">
                        {
                            CardData.map((element, index) => {
                                return (
                                    <AboutCard
                                        imageSrc={element.imageSrc}
                                        alt={element.alt}
                                        title={element.title}
                                        text={element.text}
                                        buttonLink={element.buttonLink}
                                        buttonText={element.buttonText}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default AboutCards;