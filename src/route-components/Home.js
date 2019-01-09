import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FUMC Digital Signage
            </h1>
              <h2 className="subtitle">
                Salem, VA
            </h2>
            </div>
          </div>
        </section>
        <body>
          <section className="section">
            <div className="container">
              <h1 className="title">Welcome</h1>
              <h2 className="subtitle">
                Welcome to the Digital Signage <strong>Administrator Portal</strong>
              </h2>
            </div>
          </section>
        </body>
      </div>
    );
  }
}

export default Home;