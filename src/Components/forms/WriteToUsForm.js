import React from 'react';

class WriteToUsForm extends React.Component {
    render () {
        return (
            <form className="form-default form-contact-us row">
                <label className="col-sm-6">
                    <input type="text" placeholder="name" />
                </label>
                <label className="col-sm-6">
                    <input type="email" placeholder="email" />
                </label>
                <label className="col-sm-6">
                    <input type="tel" placeholder="phone" />
                </label>
                <label className="col-sm-6">
                    <select>
                        <option value="Service">service</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="technology">technology</option>
                        <option value="real-estate">real estate</option>
                        <option value="telecommunication">telecommunication</option>
                        <option value="banking-financial">banking &amp; financial</option>
                        <option value="Law">Law</option>
                        <option value="Construction">Construction</option>
                    </select>
                </label>
                <label className="col-12">
                    <textarea rows="6" placeholder="Comment"></textarea>
                </label>
                <button className="button-main m-auto" type="submit">submit now</button>
            </form>
        )
    }
}

export default WriteToUsForm;