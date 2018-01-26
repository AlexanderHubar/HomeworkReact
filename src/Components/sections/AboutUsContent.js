import React from 'react';

import Paragraph from '../card/CardParagraph';
import AboutForm from '../forms/aboutForm';

const ParagraphData = [
    {
        title: 'About us',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.'
    },
    {
        title: 'Vision',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
    },
    {
        title: 'mission',
        text: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
    }
];

class AboutUsContent extends React.Component {
    render () {
        return (
            <section className="about-us-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            {
                                ParagraphData.map((element, index) => {
                                    return (
                                        <Paragraph
                                            title={element.title}
                                            text={element.text}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-5">
                            <div className="about-us-video-section">
                                <iframe
                                    src="https://www.youtube.com/embed/jlWMTNZNOc0"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    title={"uniqueTitle"}
                                />
                            </div>
                            <div className="form-about-us">
                                <h4>FREE Consultation</h4>
                                <AboutForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUsContent;