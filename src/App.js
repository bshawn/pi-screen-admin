import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './route-components/Home';
import Screens from './route-components/Screens';
import Presentations from './route-components/Presentations';
import Help from './route-components/Help';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/screens" component={Screens} />
            <Route path="/presentations" component={Presentations} />
            <Route path="/help" component={Help} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
