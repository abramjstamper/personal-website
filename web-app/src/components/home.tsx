import React, { Component } from 'react';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import About from './about';
import Technologies from './technologies';
import Timeline from './timeline';

class Home extends Component {

  // componentDidMount() {
  //   Events.scrollEvent.register('begin', function (to, element) {
  //     console.log('begin', arguments);
  //   });

  //   Events.scrollEvent.register('end', function (to, element) {
  //     console.log('end', arguments);
  //   });

  //   scrollSpy.update();
  // }

  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

  render() {
    return (
      <div className='container'>
        {/* <Element name='about' className='element'> */}
        <section className='section'>
          <h1 className='title has-text-white'>Welcome!</h1>
          <div className='hero-body'>
            <About />
          </div>
        </section>
        {/* </Element> */}
        {/* <Element name='timeline' className='element'> */}
        <section className='section'>
          <div className='hero-body'>
            <Timeline />
          </div>
        </section>
        {/* </Element> */}
        {/* <Element name='technologies' className='element'> */}
        <section className='section'>
          <div className='hero-body'>
            <Technologies />
          </div>
        </section>
        {/* </Element> */}
      </div>
    );
  }
}

export default Home;