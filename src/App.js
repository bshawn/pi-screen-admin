import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Screens from './components/Screens';
import Presentations from './components/Presentations';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/screens" component={Screens} />
            <Route path="/presentations" component={Presentations} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
