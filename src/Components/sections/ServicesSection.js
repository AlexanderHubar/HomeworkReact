import React from 'react';
import Button from '../button/button';


const list = [
    {
        title: 'business consultation',
        icon: 'icon-business-consultation',
        text: 'Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour'
    },
    {
        title: 'business consultation',
        icon: 'icon-boost-local-business',
        text: 'Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour'
    },
    {
        title: 'business consultation',
        icon: 'icon-accounting',
        text: 'Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour'
    }
];

const Services = () => {
    return (
        <section className="services-section">
            <h3>Services</h3>
            <div className="container">
                <div className="row">
                    {
                        list.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    className={' col-md-4 services-item icon-services ' + item.icon}>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </a>
                            );
                        })
                    }
                </div>
            </div>

            <div className="text-center">
                <Button link={"industry.html"} nameClass={"button-main button-main-margin"} text={"Full Services"} />
            </div>
        </section>
    );
};

export default Services;