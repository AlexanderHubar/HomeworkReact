import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <a href={this.props.link} className={this.props.nameClass}>{this.props.text}</a>
        )
    }
}

export default Button;