import React from 'react';

import Banner from './Components/sections/Banner';


import WriteToUs from './Components/sections/WriteToUs';
import ConnectUs from './Components/sections/ConnectUs';


class ContactUs extends React.Component {
    render () {
        return (
            <div>
                <Banner text={'contact us'} />
                <ConnectUs />
                <WriteToUs />
            </div>
        )
    }
}

export default ContactUs;