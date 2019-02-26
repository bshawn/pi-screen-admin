import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../fire';

class ScreenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: []
    };
  }

  componentWillMount() {
    /* Create reference to screens in Firebase Database */
    let query = fire.firestore().collection('screens').orderBy('location', 'asc').limit(100);
    console.log('query', query);
    query.onSnapshot(snapshot => {
      // Update React state when screen is added or removed at Firestore.
      snapshot.docChanges().forEach(change => {
        if (change.type !== 'removed') {
          let screenData = change.doc.data();
          let screen = { id: change.doc.id, name: screenData.name, location: screenData.location };
          this.setState({ screens: [screen].concat(this.state.screens) });
        }
      });
    })
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