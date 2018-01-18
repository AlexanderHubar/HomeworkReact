import React from 'react';

class postCard extends React.Component {
    render() {
        return (
            <div className="col-lg-6 our-blog-card">
                <a href={this.props.link}>
                    <img className="our-blog-slide-img" src={this.props.image} alt={this.props.alt} />
                    <div className="our-blog-card-wrap">
                        <span className="our-blog-date">{this.props.date}</span>
                        <h5>{this.props.title}</h5>
                        <p>{this.props.text}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default postCard;