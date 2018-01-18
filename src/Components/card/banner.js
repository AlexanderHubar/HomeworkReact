import React from 'react';
import Button from '../button/button'

class Banner extends React.Component {
    render () {
        return (
            <div className="row boost-business align-items-center justify-content-between">
                <p>{this.props.paragraphText}</p>
                <Button link={"contact-us.html"} nameClass={"button-main"} text={"Boost your business"} />
            </div>
        )
    }
}

export default Banner;