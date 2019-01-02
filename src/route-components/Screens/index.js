import React, { Component } from 'react';
import ScreenList from './ScreenList';
import ScreenAdminForm from './ScreenAdminForm';

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
          <ScreenList />
        </div>
        <div class="column is-hidden-mobile">
          <ScreenAdminForm />
        </div>
        <div class="column is-hidden-tablet">
          <ScreenList />
        </div>
      </div>
    );
  }
}

export default Screens;