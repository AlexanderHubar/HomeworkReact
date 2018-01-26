import React from 'react';

class CardParagraph extends React.Component {
    render () {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
            )
    }

}

export default CardParagraph;