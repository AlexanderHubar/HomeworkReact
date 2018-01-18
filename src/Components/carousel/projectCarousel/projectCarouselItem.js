import React from 'react';
import Button from '../../button/button';

class projectCarouselItem extends React.Component {
    render () {
        return (
            <div className="project-slider-item">
                <Button link={"/"} nameClass={"button-main button-card"} text={"Real Estate"} />
                <img className="card-img-top" src={this.props.sliderImg} alt={this.props.alt}/>

                <div className="card-block bg-white">
                    <a href={this.props.link}>
                        <h5>{this.props.title}</h5>
                    </a>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default projectCarouselItem;