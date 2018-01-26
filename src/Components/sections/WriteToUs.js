import React from 'react';

import WriteToUsForm from '../forms/WriteToUsForm';

class WriteToUs extends React.Component {
    render () {
        return (
            <section className="write-to-us-section gray-bg">
                <h3 className="text-center">write to us</h3>
                <div className="container">
                    <WriteToUsForm />
                </div>
            </section>
        )
    }
}

export default WriteToUs;