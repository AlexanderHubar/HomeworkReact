import React from 'react';

import Header from './Components/header/Header';

import Welcome from './Components/sections/WelcomeSection';
import About from './Components/sections/AboutSection';
import Features from './Components/sections/FeaturesSection';
import Project from './Components/sections/ProjectSection';
import Services from './Components/sections/ServicesSection';
import Testimonials from './Components/sections/TestimonialsSection';
import Blog from './Components/sections/BlogSection';
import Contact from './Components/sections/ContactSection';

import Footer from './Components/footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper main-page">

                    <Header />

                    <Welcome />

                    <About />

                    <Features />

                    <Project />

                    <Services />

                    <Testimonials />

                    <Blog />

                    <Contact />

                </div>

                <Footer />
            </div>
        );
    }
}

export default App;