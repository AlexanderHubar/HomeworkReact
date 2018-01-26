import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutUs from './aboutUs';
import Industry from './industry';
import Contact from './contactUs';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/industry" component={Industry} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </main>
);

export default Main;