import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <div className={this.props.isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <Link to="/screens" className="navbar-item">
            Screens
          </Link>

          <Link to="/presentations" className="navbar-item">
            Presentations
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
              <Link to="/help" className="button is-info is-inverted">
                <span>Help</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;