import React, { Component } from 'react';
import './screens.css';
import ScreenList from './ScreenList';
import ScreenAdminForm from './ScreenAdminForm';

class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedScreenId: null
    };
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-3 is-hidden-mobile">
          <ScreenList screenId={this.state.selectedScreenId} onSelection={this.screenIdChanged} />
        </div>
        <div className="column is-hidden-mobile">
          <ScreenAdminForm screenId={this.state.selectedScreenId} />
        </div>
        <div className="column is-hidden-tablet">
          <ScreenList screenId={this.state.selectedScreenId} />
        </div>
      </div>
    );
  }

  screenIdChanged = (newScreenId) => {
    this.setState({
      selectedScreenId: newScreenId
    });
  }
}

export default Screens;