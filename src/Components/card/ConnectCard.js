import React from 'react';

class ConnectCard extends React.Component {
    render () {
        return (
            <li className={this.props.listItemClass}>
                <i className={'connect-icon ' + this.props.iconClass}></i>
                <span>{this.props.title}</span>
                <p><a href={this.props.link}>{this.props.text}</a></p>
            </li>
        )
    }
}

export default ConnectCard;