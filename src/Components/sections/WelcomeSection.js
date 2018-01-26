import React from 'react';
import ListCard from '../card/listCard';

const listCardData = [
    {
        link: '/',
        icon: 'icon-education icon-industry',
        title: 'Education'
    },
    {
        link: '/about',
        icon: 'icon-business icon-industry',
        title: 'Business'
    },
    {
        link: '/industry',
        icon: 'icon-technology icon-industry',
        title: 'Technology'
    },
    {
        link: '/contact',
        icon: 'icon-banking icon-industry',
        title: 'Banking'
    },
    {
        link: '/',
        icon: 'fa-3x icon-home icon-industry',
        title: 'Real Estate'
    },
    {
        link: '/about',
        icon: 'fa fa-3x fa-volume-control-phone icon-industry',
        title: 'Communication'
    },
    {
        link: '/indusrty',
        icon: 'fa fa-3x fa-balance-scale icon-industry',
        title: 'Law'
    },
    {
        link: '/contact',
        icon: 'fa fa-3x fa-wrench icon-industry',
        title: 'Construction'
    }
];

class Welcome extends React.Component {
    componentDidMount () {
        const $ = window.$;
        $('#welcomeCarousel').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 544,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }
    render () {
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
    }
};

export default Welcome;