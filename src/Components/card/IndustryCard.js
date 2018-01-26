import React from 'react';

class IndustryCard extends React.Component {
    render () {
        return (
            <li className="col-md-6">
                <div className="industry-card">
                    <div className="industry-card-img">
                        <img src={this.props.ImageSrc} alt={this.props.alt} />
                    </div>
                    <div className="industry-card-info">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.text}</p>
                        <button className="button-main button-industry">{this.props.buttonText}</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default IndustryCard;