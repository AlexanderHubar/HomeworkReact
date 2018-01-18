import React from 'react';
import ListCard from '../card/listCard';

const listCardData = [
    {
        link: '/',
        icon: 'icon-education icon-industry',
        title: 'Education'
    },
    {
        link: '/',
        icon: 'icon-business icon-industry',
        title: 'Business'
    },
    {
        link: '/',
        icon: 'icon-technology icon-industry',
        title: 'Technology'
    },
    {
        link: '/',
        icon: 'icon-banking icon-industry',
        title: 'Banking'
    },
    {
        link: '/',
        icon: 'fa-3x icon-home icon-industry',
        title: 'Real Estate'
    },
    {
        link: '/',
        icon: 'fa fa-3x fa-volume-control-phone icon-industry',
        title: 'Communication'
    },
    {
        link: '/',
        icon: 'fa fa-3x fa-balance-scale icon-industry',
        title: 'Law'
    },
    {
        link: '/',
        icon: 'fa fa-3x fa-wrench icon-industry',
        title: 'Construction'
    }
];

const Welcome = () => {
    return (
        <section className="banner banner-home-page banner-bg">
            <div className="welcome-info text-white text-center text-uppercase">
                <h2>We are leading consulting company</h2>
                <h2><span>Choose your industry</span></h2>
            </div>
            <div id="welcomeCarousel" className="container welcome-carousel">
                {
                    listCardData.map((element, index) => {
                        return (
                            <ListCard link={element.link} icon={element.icon} title={element.title} key={index}/>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Welcome;