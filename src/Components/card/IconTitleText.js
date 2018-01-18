import React from 'react';

class IconTitleText  extends React.Component {
    render () {
        return (
            <div className={' icon-features mb-5 ' + this.props.blockPos + ' ' + this.props.iconPos + ' ' + this.props.icon} >
                <h5>{this.props.title}</h5>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default IconTitleText;