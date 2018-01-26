import React from 'react';

import Welcome from './Components/sections/WelcomeSection';
import About from './Components/sections/AboutSection';
import Features from './Components/sections/FeaturesSection';
import Project from './Components/sections/ProjectSection';
import Services from './Components/sections/ServicesSection';
import Testimonials from './Components/sections/TestimonialsSection';
import Blog from './Components/sections/BlogSection';
import Contact from './Components/sections/ContactSection';

class Home extends React.Component {
    render () {
        return (
            <div className="Home">
                <Welcome />

                <About />

                <Features />

                <Project />

                <Services />

                <Testimonials />

                <Blog />

                <Contact />
            </div>
        )
    }
}

export default Home;