import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="has-navbar-fixed-top">
        <header>
          <Navbar />
        </header>

      </div>
    );
  }
}

export default App;
