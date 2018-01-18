import React from 'react';
import Card from '../card/IconTitleText';
import Banner from '../card/banner';

const leftListCardData = [
    {
        blockPos: 'features-item-left',
        iconPos: 'icon-features-right',
        icon: 'icon-features-support',
        title: '24 hour support',
        text: 'containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus'
    },
    {
        blockPos: 'features-item-left',
        iconPos: 'icon-features-right',
        icon: 'icon-features-security',
        title: 'FUll security',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    }
];

const rightListCardData = [
    {
        blockPos: 'features-item-right',
        iconPos: 'icon-features-left',
        icon: 'icon-features-business-boosting',
        title: '24 hour support',
        text: 'containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus'
    },
    {
        blockPos: 'features-item-right',
        iconPos: 'icon-features-left',
        icon: 'icon-features-creative-process',
        title: 'FUll security',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    }
];

const Features = () => {
    return (
        <section className="our-features-section gray-bg text-center">
            <h3>our features</h3>
            <div className="container">

                <div className="row align-items-center mb-5">
                    <div className="col-md-5 text-right">
                        {
                            leftListCardData.map((element, index) => {
                                return (
                                    <Card blockPos={element.blockPos} iconPos={element.iconPos} icon={element.icon} title={element.title} text={element.text} key={index}/>
                                )
                            })
                        }
                    </div>

                    <div className="col-sm-2 middle-circle">
                        <div className="circle-for-logo d-flex align-items-center justify-content-center">
                            <img src="images/logo-icon.png" alt="logo-icon" />
                        </div>
                    </div>
                    <div className="col-md-5 text-left">
                        {
                            rightListCardData.map((element, index) => {
                                return (
                                    <Card blockPos={element.blockPos} iconPos={element.iconPos} icon={element.icon} title={element.title} text={element.text} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>

                <Banner paragraphText={"If you want to boost your business Contact us"}/>

            </div>

        </section>
    );
};

export default Features;