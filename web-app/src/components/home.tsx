import React, { Component } from 'react';
import Timeline from './timeline';
import About from './about';
import Technologies from './technologies';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <section className='section'>
          <h1 className='title has-text-white'>Welcome!</h1>
          <div className='hero-body'>
            <About />
          </div>
        </section>
        <section className='section'>
          <div className='hero-body'>
            <Timeline />
          </div>
        </section>
        <section className='section'>
          <div className='hero-body'>
            <Technologies />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;