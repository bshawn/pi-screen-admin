import React, { Component } from 'react';
import './screens.css';

class ScreenList extends Component {
  render() {
    return (
      <aside className="screen-list menu">
        <p className="menu-label">
          Screens
        </p>
        <ul className="menu-list">
          <li>
            <a className="is-active">
              <h1 className="title is-5">
                Screen 1
                </h1>
              <h2 className="subtitle is-6">
                Screen 1 location
                </h2>
            </a>
          </li>
          <li>
            <a>
              <div className="content">
                <h1 className="title is-5">
                  Screen 2
                </h1>
                <h2 className="subtitle is-6">
                  Screen 2 location
                </h2>
              </div>
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default ScreenList;