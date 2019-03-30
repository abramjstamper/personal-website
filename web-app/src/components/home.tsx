import React, { Component } from 'react';
import Timeline from './timeline';
import About from './about';
import Technologies from './technologies';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='section'>
          <h1 className='title has-text-white'>Welcome!</h1>
          <About />
        </div>
        <div className='section'>
          <Timeline />
        </div>
        <div className='section'>
          <Technologies />
        </div>
      </div>
    );
  }
}

export default Home;