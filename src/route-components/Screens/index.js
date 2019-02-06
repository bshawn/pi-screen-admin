import React, { Component } from 'react';
import './screens.css';
import ScreenList from './ScreenList';
import ScreenAdminForm from './Screen';
import { Route } from 'react-router-dom';

class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedScreenId: null
    };
  }

  render() {
    const { match, location } = this.props;

    return (
      <div className="columns">
        <div className="column is-3 is-hidden-mobile">
          <ScreenList match={match} location={location} />
        </div>
        <div className="column is-hidden-mobile">
          <Route path={`${match.path}/:id`} component={ScreenAdminForm} />
        </div>
        <div className="column is-hidden-tablet">
          <ScreenList match={match} location={location} />
        </div>
      </div>
    );
  }
}

export default Screens;