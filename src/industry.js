import React from 'react';

import Banner from './Components/sections/Banner';
import ChooseIndustry from './Components/sections/ChooseIndustry';
import Testimonials from './Components/sections/TestimonialsSection';



class Industry extends React.Component {

    render() {
        return (
            <div>
                <Banner text={'industry'} />
                <ChooseIndustry />
                <Testimonials />
            </div>
        )
    }
}

export default Industry;
