import React from 'react';

class AboutForm extends React.Component {
    render () {
        return (
            <form className="form-default container no-padding">
                <div className="row">
                    <div className="col-6">
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col-6">
                        <input type="email" placeholder="email" />
                    </div>
                </div>
                <textarea rows="4" placeholder="Comment"></textarea>
                <button className="button-main button-second-margin">Submit Now</button>
            </form>
        )
    }
}

export default AboutForm;