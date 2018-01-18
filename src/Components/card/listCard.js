import React from 'react';

class listCard extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <a href={this.props.link} className="d-block link-industry text-white text-center text-uppercase">
                    <i className={this.props.icon}></i>{this.props.title}
                </a>
            </div>
        );
    }
}

export default listCard;