import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-primary">
            <span className="icon is-large">
              <i className="fas fa-lg fa-tv"></i>
            </span>
            <span>&nbsp;</span>
            <span className="title is-4 has-text-primary">Signage</span>
          </Link>

          <a role="button" className={this.state.menuVisible ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" onClick={this.toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <NavMenu isActive={this.state.menuVisible} />
      </nav>
    );
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuVisible: !state.menuVisible
    }));
  }
}

export default Navbar;