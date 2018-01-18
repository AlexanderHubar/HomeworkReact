import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>
                    <img src={this.props.image} alt={this.props.alt} />
                </a>
            </li>
        )
    }
}

export default Image;