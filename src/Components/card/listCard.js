import React from 'react';
import { Link } from 'react-router-dom';

class  listCard extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <Link to={this.props.link} className="d-block link-industry text-white text-center text-uppercase">
                    <i className={this.props.icon}></i>{this.props.title}
                </Link>
            </div>
        );
    }
}

export default listCard;