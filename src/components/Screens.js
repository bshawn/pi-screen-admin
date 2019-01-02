import React, { Component } from 'react';

class Screens extends Component {
  render() {
    return (
      // <div class="container">
      //   <body>
      //     <section class="section">
      //       <div class="container">
      //         <h1 class="title">Screens</h1>
      //       </div>
      //     </section>
      //   </body>
      // </div>
      <div class="columns">
        <div class="column is-3 is-hidden-mobile">
          <h1 class="title">List 3col</h1>
        </div>
        <div class="column is-hidden-mobile">
          <h1 class="title">Content</h1>
        </div>
        <div class="column is-hidden-tablet">
          <h1 class="title">List</h1>
        </div>
      </div>
    );
  }
}

export default Screens;