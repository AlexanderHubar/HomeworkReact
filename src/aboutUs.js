import React from 'react';

import Banner from './Components/sections/Banner';
import AboutUsContent from './Components/sections/AboutUsContent';
import AboutCards from './Components/sections/AboutCards';
import Testimonials from './Components/sections/TestimonialsSection';

class AboutUs extends React.Component {

    render() {
        return (
            <div>
                <Banner text={'about us'} />
                <AboutUsContent />
                <AboutCards />
                <Testimonials />
            </div>
        )
    }
}

export default AboutUs;
