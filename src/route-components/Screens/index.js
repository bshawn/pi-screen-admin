import React, { Component } from 'react';
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
      <div class="columns">
        <div class="column is-3 is-hidden-mobile">
          <ScreenList screenId={this.state.selectedScreenId} onSelection={this.screenIdChanged} />
        </div>
        <div class="column is-hidden-mobile">
          <ScreenAdminForm screenId={this.state.selectedScreenId} />
        </div>
        <div class="column is-hidden-tablet">
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