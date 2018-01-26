import React from 'react';

class AboutCard extends React.Component {
    render () {
        return (
            <li className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={this.props.imageSrc} alt={this.props.alt} />
                    <div className="card-block">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.text}</p>
                        <a href={this.props.buttonLink} className="button-main">{this.props.buttonText}</a>
                    </div>
                </div>
            </li>
        )
    }
}

export default AboutCard;
