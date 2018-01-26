import React from 'react';

import IndustryCard from '../card/IndustryCard';

const IndustryCardData = [
    {
        ImageSrc: 'images/industry-business.png',
        alt: 'industry-business',
        title: 'Business',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    },
    {
        ImageSrc: 'images/industry-education.png',
        alt: 'industry-business',
        title: 'education',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    } ,
    {
        ImageSrc: 'images/industry-technology.png',
        alt: 'industry-business',
        title: 'technology',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    },
    {
        ImageSrc: 'images/industry-real-estate.png',
        alt: 'industry-business',
        title: 'real estate',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    },
    {
        ImageSrc: 'images/industry-telecommunication.png',
        alt: 'industry-business',
        title: 'telecommunication',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    },
    {
        ImageSrc: 'images/industry-banking-financial.png',
        alt: 'industry-business',
        title: 'banking &amp; & financial',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    },
    {
        ImageSrc: 'images/industry-law.png',
        alt: 'industry-business',
        title: 'law',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    },
    {
        ImageSrc: 'images/industry-construction.png',
        alt: 'industry-business ',
        title: 'construction',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
        buttonText: 'Choose your service'
    }
];

class ChooseIndustry extends React.Component {
    render () {
        return (
            <section className="choose-industry-section">
                <div className="container">
                    <h3>choose your industry</h3>
                    <ul className="row industry-card-list">
                        {
                            IndustryCardData.map((element, index) => {
                                return (
                                    <IndustryCard
                                        ImageSrc={element.ImageSrc}
                                        alt={element.alt}
                                        title={element.title}
                                        text={element.text}
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

export default ChooseIndustry;
