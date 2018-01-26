import React from 'react';

import ConnectCard from '../card/ConnectCard';

const ConnectCardData = [
    {
        listItemClass: 'connect-tel',
        iconClass: 'icon-call-out',
        title: 'Call Us',
        link: 'callto:88565865554',
        text: '+885 6586 5554'
    },
    {
        listItemClass: 'connect-email',
        iconClass: 'icon-envelope-open',
        title: 'Email',
        link: 'mailto:info@consultplus.com',
        text: 'info@consultplus.com'
    },
    {
        listItemClass: 'connect-address',
        iconClass: 'icon-location-pin',
        title: 'Address',
        text: 'Department 98-44-46 Morningside Road Edinburgh, Scotland'
    }
];

class ConnectUs extends React.Component {
    render () {
        return (
            <section className="connect-us-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h3>connect us</h3>
                            <ul className="connect-list">
                                {
                                    ConnectCardData.map((element, index) => {
                                        return (
                                            <ConnectCard
                                                listItemClass={element.listItemClass}
                                                iconClass={element.iconClass}
                                                title={element.title}
                                                link={element.link}
                                                text={element.text}
                                                key={index}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="map col-md-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3668.3970716265853!2d32.07126853611893!3d49.44769140099773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1515000154105"
                                width="100%"
                                height="319"
                                frameBorder="0"
                                style={{border: 0}}
                                allowFullScreen=""
                                title={"uniqueTitle"}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ConnectUs;