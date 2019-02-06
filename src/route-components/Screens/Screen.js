import React, { Component } from 'react';

class Screen extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className="content">
        <h1 className="title">Screen</h1>
        <h2 className="subtitle">{match.params.id}</h2>
      </div>
    );
  }
}

export default Screen;