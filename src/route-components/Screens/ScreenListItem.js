import React, { Component } from 'react';

class ScreenListItem extends Component {
  render() {
    return (
      <li>
        <a className={this.props.isActive ? "is-active" : ""}
          onClick={this.onClick}>
          <h1 className="title is-5">
            {this.props.name}
          </h1>
          <h2 className="subtitle is-6">
            {this.props.location}
          </h2>
        </a>
      </li>
    );
  }

  onClick = () => {
    this.props.onClick(this.props.id);
  }
}

export default ScreenListItem;