import React, { Component } from 'react';
import './ScreenListItem';
import ScreenListItem from './ScreenListItem';

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
            <ScreenListItem
              key={screen.id}
              id={screen.id}
              name={screen.name}
              location={screen.location}
              isActive={screen.id === this.state.activeScreenId}
              onClick={this.screenClicked} />
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