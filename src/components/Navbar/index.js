import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import Logo from './Logo';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
  }

  render() {
    const menuButtonClass = this.state.menuVisible ? 'navbar-burger burger is-active' : 'navbar-burger burger';

    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-primary">
            <Logo />
          </Link>

          <a role="button" className={menuButtonClass} aria-label="menu" aria-expanded="false" onClick={this.toggleMenu}>
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