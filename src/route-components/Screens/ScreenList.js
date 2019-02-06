import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ScreenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [
        {
          id: '00000000-0000-0000-0000-000000000000',
          name: 'Screen 1',
          location: 'Screen 1 location'
        },
        {
          id: '00000000-0000-0000-0000-000000000001',
          name: 'Screen 2',
          location: 'Screen 2 location'
        }
      ]
    };
  }

  render() {
    return (
      <aside className="screen-list menu">
        <p className="menu-label">
          Screens
        </p>

        <ul className="menu-list">

          {this.state.screens.map((screen) => {
            const { match, location } = this.props;
            const targetRoutePath = `${match.url}/${screen.id}`;
            const isActive = targetRoutePath === location.pathname;

            return (
              <li key={screen.id}>
                <Link to={targetRoutePath} className={isActive ? "is-active" : ""}>
                  <h1 className="title is-5">
                    {screen.name}
                  </h1>
                  <h2 className="subtitle is-6">
                    {screen.location}
                  </h2>
                </Link>
              </li>
            );
          })}

        </ul>
      </aside>
    );
  }
}

export default ScreenList;