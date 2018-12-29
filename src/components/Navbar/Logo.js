import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div>
                <span className="icon is-large">
                    <i className="fas fa-lg fa-tv"></i>
                </span>
                <span>&nbsp;</span>
                <span className="title is-4 has-text-primary">Signage</span>
            </div>
        );
    }
}

export default Logo;