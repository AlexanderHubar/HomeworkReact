import React from 'react';
import Button from '../button/button';

class projectCard extends React.Component {
    render () {
        return (
            <div className="col-lg-4 card border-0">
                <Button link={"industry.html"} nameClass={"button-main button-card"} text={"Banking"} />
                <img className="card-img-top card-project" src={this.props.imageSrc} alt={this.props.alt}/>

                <div className="card-block card-block-accent">
                    <a href={this.props.postLink}>
                        <h5>{this.props.title}</h5>
                    </a>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default projectCard;