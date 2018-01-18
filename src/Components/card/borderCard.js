import React from 'react';

class borderCard extends React.Component {
    render () {
        return (
            <a href={this.props.link} className="col-sm-4 quick-contact-block">
                <div className={'quick-contact-block-wrap icon-quick-contact ' + this.props.icon}>
                    <div className="quick-contact-block-info">
                        <h5>{this.props.title}</h5>
                        <span>{this.props.text}</span>
                    </div>
                </div>
            </a>
        )
    }
}

export default borderCard;