import React from 'react';
import ClientCarousell from '../carousel/clientCarousel/clientCarousel';

const Testimonials = () => {
    return (
        <section className="testimonials-section text-center">
            <div className="container">
                <h3 className="text-white">Testimonials</h3>

                <ClientCarousell />

            </div>
        </section>
    )
};

export default Testimonials;