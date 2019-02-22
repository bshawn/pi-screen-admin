import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);

    this.screenDetails = [
      {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Screen 1',
        location: 'Screen 1 location',
        presentationUrl: 'https://firebasestorage.googleapis.com/v0/b/pi-screen-api.appspot.com/o/Default%20Presentation.mp4?alt=media&token=cd62b3ea-6374-4675-b985-150dac68ccaa'
      },
      {
        id: '00000000-0000-0000-0000-000000000001',
        name: 'Screen 2',
        location: 'Screen 2 location',
        presentationUrl: 'https://firebasestorage.googleapis.com/v0/b/pi-screen-api.appspot.com/o/Default%20Presentation.mp4?alt=media&token=cd62b3ea-6374-4675-b985-150dac68ccaa'
      }
    ];
  }

  render() {
    const { match } = this.props;
    const screen = this.getScreen(match.params.id);

    return (
      <div className="content">
        <section>
          <h1 className="title">{screen.name}</h1>
          <h2 className="subtitle">{screen.location}</h2>
        </section>
        <section className="section">
          <video width="320" height="240">
            <source src={screen.presentationUrl} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </section>
      </div>
    );
  }

  getScreen(screenId) {
    return this.screenDetails.find(s => s.id === screenId);
  }
}

export default Screen;