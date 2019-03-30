import React, { Component } from 'react';
import Home from './home';
import Footer from './shared/footer';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <div className='site-content'>
          <Home />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
