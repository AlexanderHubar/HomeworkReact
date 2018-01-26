import React from 'react';

import Header from './Components/header/Header';
import Main from './Main';
import Footer from './Components/footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper main-page">

                    <Header />
                    <Main />

                </div>

                <Footer />
            </div>
        );
    }
}

export default App;