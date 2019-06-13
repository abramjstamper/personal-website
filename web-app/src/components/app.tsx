import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './shared/footer';
import Home from './home';
import Navbar from './shared/navbar';

class App extends Component {

  render() {
    return (
      <section className='hero is-fullheight'>
        <Router>
          <Navbar />
          <Route render={(props) => <Home {...props} />} />
          <Footer />
        </Router>
      </section>
    );
  }
}

export default App;