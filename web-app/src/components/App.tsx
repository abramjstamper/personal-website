import React, { Component } from 'react';
import Home from './home';
import Footer from './shared/footer';

class App extends Component {
  render() {
    return (
      <section className='hero is-fullheight'>
        <div className='hero-body'>
          <Home />
        </div>
        <div className='hero-foot'>
          <Footer />
        </div>
      </section>
    );
  }
}

export default App;
