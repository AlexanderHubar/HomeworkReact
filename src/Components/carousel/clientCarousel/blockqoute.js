import React from 'react';

class blockqoute extends React.Component {
    render () {
        return (
            <blockquote>
                <p className="blockquote-text">{this.props.text}</p>
                <p className="blockquote-client-name text-uppercase">{this.props.name}</p>
                <p>{this.props.designation}</p>
            </blockquote>
        )
    }
}

export default blockqoute;