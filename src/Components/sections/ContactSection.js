import React from 'react';
import BorderCard from '../card/borderCard';

const cardData = [
    {
        link: 'mailto:info@consultplus.com',
        icon: 'icon-email',
        title: 'Email',
        text: 'info@consultplus.com'
    },
    {
        link: 'callto:9188798767990',
        icon: 'icon-call-us',
        title: 'Call us',
        text: '+91 8879 8767 990'
    },
    {
        link: 'mailto:consult@career.com',
        icon: 'icon-career',
        title: 'Career',
        text: 'consult@career.com'
    }
];

const Contact = () => {
    return (
        <section className="quick-contact-section">
            <h3>Quick contact</h3>
            <div className="container">
                <div className="row">

                    {
                        cardData.map((element, index) => {
                            return (
                                <BorderCard link={element.link} icon={element.icon} title={element.title} text={element.text} key={index}/>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Contact;