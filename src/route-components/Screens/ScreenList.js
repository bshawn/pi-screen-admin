import React, { Component } from 'react';
import './screens.css';

class ScreenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreenId: '00000000-0000-0000-0000-000000000000',
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

          {this.state.screens.map((screen) =>

            <li key={screen.id}>
              <a className={screen.id === this.state.activeScreenId ? "is-active" : ""}
                onClick={(e) => this.screenClicked(screen.id, e)}>
                <h1 className="title is-5">
                  {screen.name}
                </h1>
                <h2 className="subtitle is-6">
                  {screen.location}
                </h2>
              </a>
            </li>

          )}

        </ul>
      </aside>
    );
  }

  screenClicked = (screenId) => {
    this.setState({
      activeScreenId: screenId
    });
    this.props.onSelection(screenId);
  }
}

export default ScreenList;