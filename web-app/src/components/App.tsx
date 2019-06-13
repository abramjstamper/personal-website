import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './shared/footer';
import Home from './home';
import Navbar from './shared/navbar';

class App extends Component {
  render() {
    return (
      <section className='hero is-fullheight'>
        <Router>
          <Navbar />
          <Home />
          <Footer />
        </Router>
      </section>
    );
  }
}

export default App;
